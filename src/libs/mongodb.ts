import mongoose from "mongoose";

export class MongoDb {
    private uri: string;

    constructor(private readonly host: string, private readonly user: string, private readonly pass: string, private readonly db: string) {
        this.uri = this.getUri();
    }

    private getUri(): string {
        return this.user && this.pass ? `mongodb://${this.user}:${this.pass}@${this.host}/${this.db}` : `mongodb://${this.host}/${this.db}`;
    }

    async connect() {
        await mongoose.connect(this.uri);
    }

    async disconnect() {
        await mongoose.connection.close();
    }
}