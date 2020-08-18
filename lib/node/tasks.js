const Listr = require('listr');
const path = require('path');
const { shallowClone, initRepo, initialCommit } = require('../git');
const { checkDirectory, deleteDirectory } = require('../filesystem');

const tasks = (database, destinationPath) => new Listr([
  {
    title: 'Check destination directory',
    task: () => checkDirectory(destinationPath),
  },
  {
    title: 'Clone the boilerplate',
    task: () => shallowClone(database, destinationPath),
  },
  {
    title: 'Set up git',
    task: () => new Listr([
      {
        title: 'Delete boilerplate git history',
        task: () => deleteDirectory(path.join(destinationPath, '.git')),
      },
      {
        title: 'Initialise new repo',
        task: () => initRepo(destinationPath),
      },
      {
        title: 'Initial commit',
        task: () => initialCommit(destinationPath),
      },
    ]),
  },
]);

module.exports = tasks;
