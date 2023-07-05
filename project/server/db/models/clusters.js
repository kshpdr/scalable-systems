import { sequelize } from '../db';
const { DataTypes} = require('sequelize');
// import conn from './index'

export const Clusters = sequelize.define('clusters',{
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
    },
    region: {
        type: DataTypes.STRING
    },
    numCores: {
        type: DataTypes.INTEGER
    },
    numTBsRam: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'clusters',
    timestamps: false
});



