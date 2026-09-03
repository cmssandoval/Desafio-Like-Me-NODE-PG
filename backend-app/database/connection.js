const { Pool } = require('pg');
require('dotenv/config');

const pool = new Pool({
    // host:'localhost',
    // port:'5432',
    // database:'likeme',
    // user:'postgres',
    // password:'postgres',
    allowExitOnIdle: true,
});

module.exports = { pool };