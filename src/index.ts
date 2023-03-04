import { Server } from "./libs/server"
import { MongoDb } from "./libs/mongodb";
import { Example } from "./models/example";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const MONGODB_HOST = process.env.MONGODB_HOST || "localhost";
const MONGODB_DB = process.env.MONGODB_DB || "mydb";
const MONGODB_USER = process.env.MONGODB_USER || "";
const MONGODB_PASS = process.env.MONGODB_PASS || "";
const SERVER_PORT = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000;

// Crear instancia de la clase Server
const server = new Server(SERVER_PORT);

// Formar uri de conexion a MongoDb y crear instancia de la clase MongoDb
const mongo = new MongoDb(MONGODB_HOST, MONGODB_USER, MONGODB_PASS, MONGODB_DB);

// Funcion autoejecutable
(async () => {
    try {
        // Conectar a MongoDb
        await mongo.connect();
        console.log(`Connected to MongoDB at ${MONGODB_HOST} database ${MONGODB_DB}`);

        // Conectar a Express
        await server.start();
        console.log(`Server started on port ${SERVER_PORT}`);

        // Insertar un documento de ejemplo
        const document = await Example.create({
            name: "Hello", description: "World"
        });
        console.log(`Document inserted: ${document}`);

        // Obtener listado de documentos de ejemplo
        const documents = await Example.find();
        console.log(`Documents found: ${documents}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

// Funcion a ejecutar en caso de que se cierre la aplicacion
process.on("SIGINT", async () => {
    try {
        // Purgar bd de ejemplo
        const n = await Example.deleteMany({});
        console.log(`Deleted ${n.deletedCount} documents`);

        // Desconectar de MongoDb
        await mongo.disconnect();
        console.log("Disconnected from MongoDB");

        // Desconectar de Express
        await server.stop();
        console.log("Server stopped");

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});