const fs = require("fs");
const path = require("path");

const actionsFilePath = path.join(__dirname, "../data/actions.json");

const readActions = () => {
  if (!fs.exists(actionsFilePath)) {
    return { actions: [] };
  }
  return JSON.parse(fs.readFile(actionsFilePath, "utf-8"));
};

const writeActions = (data) => {
  fs.writeFile(actionsFilePath, JSON.stringify(data, null, 2));
};

module.exports = { readActions, writeActions };
