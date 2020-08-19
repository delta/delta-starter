const Listr = require('listr');
const path = require('path');
const { shallowClone, initRepo, initialCommit } = require('../git');
const { checkDirectory, deleteDirectory } = require('../filesystem');
const { npmInstall, editPackageJson } = require('./npm-utils');

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
  {
    title: 'Set up npm and node modules',
    task: () => new Listr([
      {
        title: 'Install node modules',
        task: () => npmInstall(destinationPath),
      },
      {
        title: 'Edit package.json',
        task: () => editPackageJson(destinationPath),
      },
    ]),
  },
]);

module.exports = tasks;
