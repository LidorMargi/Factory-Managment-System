const jwt = require("jsonwebtoken");
const fileRepo = require('../repositories/fileRepo')
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized. Token required." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        const userId = req.user.id;

        let data = fileRepo.readActions();
        const today = new Date().toLocaleDateString("en-GB");

        let userActions = data.actions.filter(action => action.id === userId);
        let todayActions = userActions.find(action => action.date === today);

        if (!todayActions) {
            todayActions = { id: userId, maxActions: 10, date: today, actionAllowd: 10 };
            data.actions.push(todayActions);
        }
        if (todayActions.actionAllowd <= 0) {
            return res.status(403).json({ message: "Daily action limit reached. Try again tomorrow." });
        }

        todayActions.actionAllowd -= 1;
        data.actions.push(todayActions)
        fileRepo.writeActions(data);

        console.log(`User ${userId} performed an action. Remaining: ${todayActions.actionAllowd}`);
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};
module.exports = authMiddleware;