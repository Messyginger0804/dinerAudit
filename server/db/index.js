const { Pool } = require('pg');

const pool = new Pool(
    {
        user: 'messyginger',
        host: 'localhost',
        database: 'rldata',
        password: '0000',
        port: 5432,
    }
)

export const query = (text, params) => pool.query(text, params)