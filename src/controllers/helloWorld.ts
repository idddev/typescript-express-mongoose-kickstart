import { RequestHandler } from "express";

// Controlador de ejemplo
export class HelloWorldController {
    static getIndex: RequestHandler = (req, res) => {
        res.send("Hello World");
    }
};