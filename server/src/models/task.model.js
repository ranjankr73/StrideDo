import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        priority: {
            //Optional
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },
        description: {
            //Optional
            type: String,
            default: ""
        },
        status: {
            type: String,
            enum: ["Completed", "Pending"],
            default: "Pending"
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true,
    }
);

export const Task = mongoose.model("Task", taskSchema);
