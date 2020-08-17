#!/usr/bin/env node

const { program } = require('commander');
const nodeAction = require('../lib/node');

program
  .command('node <destination>')
  .description('Initialise a node application')
  .option('-d, --database <mongo|sql>', 'database (mysql/mongo)', 'mongo')
  .action(nodeAction);

program.parse(process.argv);
