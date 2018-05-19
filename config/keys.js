// keys.js - figure out what credentials to use
if (process.env.NODE_ENV === 'production') {
    //we are in production - return the prod set of keys
    module.exports = require('./prod.js')
} else {
    // we are in development- return the dev keys!!
    module.exports = require('./dev.js');
}