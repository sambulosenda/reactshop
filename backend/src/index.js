// let's go!
require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const bd = require('./db');

const server = createServer();

///
server.start({
    cors: {
        credentials: true,
        origin: Process.env.FRONTEND_URL,
    },
}, deets => {
    console.log(`Server now running on port http://localhost:${deets.port}`)

});