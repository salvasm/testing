"use strict";

function sum(a, b) {
  return a + b;
}

function findKey(obj, key) {
  let result = Object.entries(obj).filter((item) => item[0] === key);
  return result;
}

module.exports = {
  sum,
  findKey,
};
