var ref = require('ref');
var ffi = require("ffi");

// typedefs
var myobj = ref.types.void // we don't know what the layout of "myobj" looks like

var libmylib = ffi.Library('libmylib', {
  "halve": [ 'int', [ 'int' ] ]
});

var i = 4;
var res = libmylib.halve(i);

console.log('half of ' + i + ' = ' + res);
