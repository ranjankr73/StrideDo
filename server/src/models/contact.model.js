import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        request: {
            type: String,
            required: true,
        },
        message: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const Contact = mongoose.model("Contact", contactSchema);
