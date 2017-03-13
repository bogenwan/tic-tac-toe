var fs = require('fs');
var path = require('path');

path.basename(process.cwd());

module.exports = {
  getCurrentDirectoryBase: function () {
    return path.basename(process.cwd())
  },
  directoryExist: function (filePath) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};