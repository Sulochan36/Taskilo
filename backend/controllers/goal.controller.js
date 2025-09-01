// controllers/goalController.js
import Goal from "../models/goal.model.js";

export const createGoal = async (req, res) => {
    try {
        const { title, startDate, targetDate, description, purpose, todolist } = req.body;

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const newGoal = new Goal({
            user: req.user._id, // Attach user ID
            title,
            startDate,
            targetDate,
            description,
            purpose,
            todolist,
            status: "Ongoing"
        });

        const savedGoal = await newGoal.save();
        res.status(201).json(savedGoal);

    } catch (err) {
        console.error("Error saving goal:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user._id });
        res.status(200).json(goals);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch goals" });
    }
};

export const deleteGoal = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const deletedGoal = await Goal.findOneAndDelete({ _id: id, user: req.user._id });

        if (!deletedGoal) {
            return res.status(404).json({ message: "Goal not found or unauthorized" });
        }

        res.status(200).json({ message: "Goal deleted successfully" });
    } catch (err) {
        console.error("Error deleting goal:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const updateGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Check if user is authorized
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Find and update the goal
        const updatedGoal = await Goal.findOneAndUpdate(
            { _id: id, user: req.user._id },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updatedGoal) {
            return res.status(404).json({ message: "Goal not found or unauthorized" });
        }

        res.status(200).json(updatedGoal);
    } catch (err) {
        console.error("Error updating goal:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
