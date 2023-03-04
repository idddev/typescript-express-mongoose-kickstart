import express from "express";
import helmet from "helmet";
import http from "http"
import fs from "fs";
import path from "path";

export class Server {
    private app: express.Application;
    private server: http.Server;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Usar carpeta publica para archivos estaticos
        this.app.use(express.static("public"));
        // Usar helmet para tener un poco mas de seguridad
        this.app.use(helmet());

        // Leer la carpeta de rutas, y cargar cada una de ellas
        this.readRoutes();

        const server = http.createServer(this.app);
        this.server = server;
        this.port = port;
    }

    private readRoutes() {
        const ROUTES_PATH = path.join(__dirname, "../routes");
        const files = fs.readdirSync(ROUTES_PATH);
        for (const filePath of files) {
            const file = require(path.join(ROUTES_PATH, filePath)).default;
            // Verificar si es de tipo Router
            // Para ello, se verifica si tiene la propiedad stack
            if (file.stack) {
                const router = file as express.Router;
                this.addRouter(router);
            }
        }
    }

    private addRouter(router: express.Router) {
        this.app.use(router);
    }

    async start() {
        return new Promise<void>((resolve, reject) => {
            this.server.listen(this.port, () => {
                resolve();
            })
            .on("error", (error: Error) => {
                reject(error);
            });
        });
    }

    async stop() {
        return new Promise<void>((resolve, reject) => {
            this.server.close((error?: Error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}
