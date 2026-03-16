require("dotenv").config()
require('pg')
const { Sequelize } = require('sequelize');
const configDb = require('../configs/db.config');

/*
const db = 
process.env.MODE == "DEV" ? 
new Sequelize(
    configDb.database,
    configDb.username,
    configDb.password,
    {
        host: configDb.host,
        port: configDb.port,
        dialect: 'postgres',
        logging: false,
        ssl: false,
    }
) :
 new Sequelize(configDb.host, {
    'dialect': 'postgres',
    'dialectOptions': {
        'ssl': {
            'require': false,
            'rejectUnauthorized': false,
        }
    },
    'logging': false,
});
*/

const db = new Sequelize(
    configDb.database,
    configDb.username,
    configDb.password,
    {
        host: configDb.host,
        port: configDb.port,
        dialect: 'mysql',
        logging: false,
        ssl: false
        //ssl: process.env.MODE == 'PROD',
    }
)

module.exports = { db }