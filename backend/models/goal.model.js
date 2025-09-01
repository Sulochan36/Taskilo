import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    targetDate: { type: String, required: true },
    description: { type: String, required: true },
    purpose: { type: String, required: true },
    status: { type: String, required: true },
    todolist: {
        type: [
            {
                taskId: String,
                text: String,
                done: Boolean,
            }
        ],
        required: true,
        validate: v => Array.isArray(v) && v.length > 0
    },
}, { timestamps: true });

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;