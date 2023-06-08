import { sequelize } from '../db';
const { DataTypes} = require('sequelize');
// import conn from './index'

export const Clusters = sequelize.define('Clusters',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    powerHigh: {
        type: DataTypes.FLOAT
    },
    powerAverage: {
        type: DataTypes.FLOAT
    },
    powerLow: {
        type: DataTypes.FLOAT
    },
    energyConsumption: {
        type: DataTypes.FLOAT
    },
    numServers: {
        type: DataTypes.INTEGER
    },
    location: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Clusters'
});


// // mysql2 examples, replaced by ones with sequelize

// export const all_clusters = (() => {
//     const result = conn.query('SELECT * FROM clusters')
//     console.log(`kek${result}`)
//     return(result)
// });

// export const add_cluster = ((name, ph, pa, pl, electric, numserv, location ) => {
//     conn.query(`INSERT INTO clusters VALUES(id, ${name}, ${ph}, ${pa},${pl},${electric},${numserv},${location})`)
// })
export async function getclust() {
    return await Clusters.findAll();
}

export const clusters = async () => {
    const result = await Clusters.findAll();
    return result;
}
// // console.log(clusters.every(cluster => cluster instanceof Clusters)); // true
// console.log("All clusters:", JSON.stringify(clusters, null, 2));