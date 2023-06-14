import path from 'path';
import express from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';
import Router from './routes';
import { getClusters } from './db/helpers';
import { sequelize } from './db/db'

const clusters = require('./db/models/clusters')
const app: express.Application = express();

app.use(cors());
app.use(express.json())

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const clientBuildPath = path.resolve(__dirname, '..', 'client');

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", Router);

const start = async () => {
    try {
        await sequelize.authenticate().then(() => {
            console.log("DB User authenticated")}
        );
        await sequelize.sync();
    }
    catch (err) {
        console.log(err);
    }
}; 
start();

app.get('/api', (req, res) => {
    res.send({ message: `Welcome to our API!` });
});

app.get('/clusters', async (req, res) => {
    try {
        const clusters = await getClusters();
        console.log(clusters)
        res.send({ message: clusters });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch clusters' });
    }
});

app.get('*', (req, res) =>{
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
