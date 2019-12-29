const path = require('path');

function resolve(pathString) {
  return path.resolve(__dirname, `../${pathString}`);
}

module.exports = {
  resolve,
};
