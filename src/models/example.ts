import { model, Schema, Document } from 'mongoose';

export interface IExample extends Document {
    name: string;
    description: string;
}

const ExampleSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

export const Example = model<IExample>('Example', ExampleSchema);

export default Example;