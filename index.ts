import express from 'express';
import dotenv from 'dotenv';
import newsRouter from './routes/news';

dotenv.config();

const ENVIRONMENT = process.env.ENVIRONMENT;
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/news', newsRouter);

app.listen(3000, () => console.log(`Listening on port ${PORT}`));