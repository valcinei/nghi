#!/usr/bin/env node
const nghi = require('../dist/bundle');
const path = require('path');
var args = process;

nghi.Main(args)
// console.log('actual path',args.env.PWD);
// console.log(nghi.Main(args));
