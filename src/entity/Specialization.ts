import { model, Schema } from "mongoose";

export interface ISpecialization {
    description: string;
}

const specialization = new Schema<ISpecialization>(
    {
        description: {
            type: String,
            required: true
        }
    }
);

const Specilaization = model<ISpecialization>("Specilaization", specialization);
export { Specilaization }