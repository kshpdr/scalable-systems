import path from 'path';
import express from 'express';
import cors from 'cors';
import { getclust } from './models/clusters';
import { sequelize } from './db'

const clusters = require('./models/clusters')
const app: express.Application = express();

app.use(cors());
app.use(express.json())

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const clientBuildPath = path.resolve(__dirname, '..', 'client');

app.use(express.static(path.join(__dirname, 'client/dist')));

const start = async () => {
    try {
        await sequelize.authenticate().then(() => {console.log("siuuuu")});
        await sequelize.sync();
    }
    catch (err) {
        console.log(err);
    }
}; 
start();

app.get('/api', (req, res) => {
    res.send({ message: `Welcome to our API! ${getclust} \n \n ${JSON.stringify(getclust, null, 2)}` });
});

app.get('*', (req, res) =>{
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
