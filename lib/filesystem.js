const { promisify } = require('util');
const fs = require('fs');

const lstat = promisify(fs.lstat);
const readdir = promisify(fs.readdir);

const isPathExists = async (path) => lstat(path).then(() => true).catch((e) => e.code !== 'ENOENT');

const isDir = async (path) => lstat(path).then((s) => s.isDirectory()).catch((e) => e.code !== 'ENOENT');

const isDirEmpty = async (dirname) => readdir(dirname).then((files) => files.length === 0);

module.exports = {
  isDirEmpty,
  isPathExists,
  isDir,
};
