const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const db_data = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
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
}) 

const start = async () => {
    try {
        await sequelize.authenticate().then(() => {console.log("siuuuu")});
        await sequelize.sync();
    }
    catch (err) {
        console.log(err);
    }
} 
start();

// export default conn;