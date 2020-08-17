const simpleGit = require('simple-git');

const git = simpleGit();

const shallowClone = async (remote, path) => git.clone(remote, path, { depth: '1' });

module.exports = {
  shallowClone,
};
