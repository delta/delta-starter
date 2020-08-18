const { promisify } = require('util');
const fs = require('fs');
const rimraf = require('rimraf');

const lstat = promisify(fs.lstat);
const readdir = promisify(fs.readdir);
const rimrafp = promisify(rimraf);

const isPathExists = async (path) => lstat(path).then(() => true).catch((e) => e.code !== 'ENOENT');

const isDir = async (path) => lstat(path).then((s) => s.isDirectory()).catch((e) => e.code !== 'ENOENT');

const isDirEmpty = async (dirname) => readdir(dirname).then((files) => files.length === 0);

const checkDirectory = async (destinationPath) => {
  if (await isPathExists(destinationPath)) {
    if (!await isDir(destinationPath)) {
      throw Error('Given destination is not a directory');
    }
    if (!await isDirEmpty(destinationPath)) {
      throw Error('Destination directory is not empty');
    }
  }
};

const deleteDirectory = async (directory) => rimrafp(directory);

module.exports = {
  isDirEmpty,
  isPathExists,
  isDir,
  checkDirectory,
  deleteDirectory,
};
