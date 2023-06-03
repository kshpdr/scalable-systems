import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes';

const app: express.Application = express();

app.use(cors());

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const clientBuildPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", Router);


app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to our API!' });
});

app.get('*', (req, res) =>{
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
