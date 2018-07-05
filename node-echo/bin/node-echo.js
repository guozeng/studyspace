/* bin/node-echo */
var argv = require('argv'),
    echo = require('../lib/echo');

// argv = argv.slice(2);

console.log(echo(argv.run()));