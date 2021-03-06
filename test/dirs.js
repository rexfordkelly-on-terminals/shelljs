var shell = require('..');

var assert = require('assert');
var path = require('path');

shell.config.silent = true;

var root = path.resolve();

shell.pushd('resources/pushd');
shell.pushd('a');

var trail = [
  path.resolve(root, 'resources/pushd/a'),
  path.resolve(root, 'resources/pushd'),
  root
];

assert.deepEqual(shell.dirs(), trail);

// Single items
assert.equal(shell.dirs('+0'), trail[0]);
assert.equal(shell.dirs('+1'), trail[1]);
assert.equal(shell.dirs('+2'), trail[2]);
assert.equal(shell.dirs('-0'), trail[2]);
assert.equal(shell.dirs('-1'), trail[1]);
assert.equal(shell.dirs('-2'), trail[0]);

// Clearing items
assert.deepEqual(shell.dirs('-c'), []);
assert(!shell.error());

shell.exit(123);
