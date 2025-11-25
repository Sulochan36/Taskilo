import User from "../models/user.model.js";

export const getTodayTasks = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).lean();
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user.todayList || []);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};


// Add task to today list
export const addToToday = async (req, res) => {
    try {
        const { goalId, taskId } = req.body;

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Prevent duplicates
        const exists = user.todayList.some(t => t.goalId === goalId && t.taskId === taskId);
        if (!exists) {
            user.todayList.push({ goalId, taskId });
            await user.save();
        }

        res.status(200).json(user.todayList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};



// Remove task from today list
export const removeFromToday = async (req, res) => {
    try {
        const { goalId, taskId } = req.body;

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.todayList = user.todayList.filter(
            t => !(t.goalId === goalId && t.taskId === taskId)
        );

        await user.save();
        res.status(200).json(user.todayList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};