//Config Heroku
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-44-197-94-126.compute-1.amazonaws.com',
        port: 5432,
        user: 'hqurrztulgkcft',
        password: 'f1f76926b801d99cd113c38e903925863c4e160bdd839f0b92e8670db1cf8cbe',
        database: 'd5d3ul5upukj9a',
        ssl: {
            rejectUnauthorized: false
        }
    }
});

// Configs Banco Local
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         password: '123456',
//         database: 'knexjsexercicio'
//     }
// });

module.exports = knex;