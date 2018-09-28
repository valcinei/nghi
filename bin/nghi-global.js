#!/usr/bin/env node
const nghi = require('../dist/bundle.js');
const path = require('path');
var args = process;

console.log('actual path',args.env.PWD);
console.log(nghi);
