const path = require('path');
const { node } = require('../urls');
const { isDirEmpty, isPathExists, isDir } = require('../filesystem');
const { shallowClone } = require('../git');
const taskList = require('./tasks');

module.exports = async (destination, cmdObj) => {
  try {
    const dataBase = cmdObj.database;
    if (dataBase !== 'mongo' && dataBase !== 'sql') {
      console.log("Database must be 'mongo' or 'sql'");
      return;
    }
    const destinationPath = path.resolve(destination);

    // if (await isPathExists(destinationPath)) {
    //   if (!await isDir(destinationPath)) {
    //     console.log('Given destination is not a directory');
    //     return;
    //   }
    //   if (!await isDirEmpty(destinationPath)) {
    //     console.log('Destination directory is not empty');
    //     return;
    //   }
    // }

    const tasks = taskList(node[dataBase], destinationPath);

    await tasks.run().catch();
  } catch (error) {
    console.log(error);
  }
  console.log('hi');
};
