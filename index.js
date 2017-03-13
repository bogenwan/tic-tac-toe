'use strict'

var chalk = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');
var Preferences = require('preferences');
var Spinner = CLI.Spinner;
var GitHubApi = require('github');
// var _           = require('lodash');
var _ = require('underscore')._;
var git  = require('simple-git')();
var touch = require('touch');
var fs = require('fs');
var files = require('./files')

clear();
console.log(
  chalk.yellow(
    figlet.textSync('TicTacToe', { horizontalLayout: 'full' })
  )
);

if (files.directoryExist('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}



var row = _.range(3);
var board = _.map(row, () => {
  return _.range(3);
})
console.log(ard);

// var ticTacToe = () => {

// };