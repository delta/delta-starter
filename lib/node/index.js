const path = require('path');
const { node } = require('../urls');
const taskList = require('./tasks');

module.exports = async (destination, cmdObj) => {
  try {
    const dataBase = cmdObj.database;
    if (dataBase !== 'mongo' && dataBase !== 'sql') {
      console.log("Database must be 'mongo' or 'sql'");
      return;
    }
    const destinationPath = path.resolve(destination);

    const tasks = taskList(node[dataBase], destinationPath);

    await tasks.run().catch();
  } catch (error) {
    console.log(error);
  }
};
