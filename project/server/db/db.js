const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const db_data = {
    host: 'localhost',
    user: 'root',
    database: 'project',
    password: 'VeryUnsafe!!!'
}

const conn = mysql.createConnection(db_data);

conn.connect( (err) => {
    if (err) {
        console.log(err)
        return(err)
    }
    else {
        console.log('connected')
        
    }
})

export const sequelize = new Sequelize(db_data.database, db_data.user, db_data.password, {
    host: 'localhost',
    dialect: 'mysql'
}); 
