const ipc = require('electron').ipcRenderer
var addon = require('./build/Release/pow');

document.getElementById('output').innerHTML = addon.pow(2,4);
//console.log("Inside pow.js ", addon.pow(2,4));