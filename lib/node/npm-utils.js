const execa = require('execa');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const npmInstall = (destinationPath) => execa('npm', ['install'], { cwd: destinationPath });

const editPackageJson = async (destination) => {
  const filePath = path.join(destination, 'package.json');
  const directoryName = path.basename(destination);
  const data = JSON.parse(await readFile(filePath));
  data.name = directoryName;
  data.version = '1.0.0';
  await writeFile(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
  npmInstall,
  editPackageJson,
};
