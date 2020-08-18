const simpleGit = require('simple-git');

const git = simpleGit();

const shallowClone = async (remote, path) => git.clone(remote, path, ['--depth', '1']);

const initRepo = async (path) => {
  const newRepo = simpleGit(path);
  await newRepo.init();
};

const initialCommit = async (path) => {
  const newRepo = simpleGit(path);
  await newRepo.add('.');
  await newRepo.commit('Add boilerplate');
};

module.exports = {
  shallowClone,
  initRepo,
  initialCommit,
};
