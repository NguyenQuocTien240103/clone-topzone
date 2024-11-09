import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import routes from './routes/index.js';
dotenv.config({ path: './.env' });

const app = express();
const port = 8081;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const checkConnect = async () => {
    try {
        const connect = await db.connect();
        if (connect) {
            console.log('connect to success');
        }
    } catch (error) {
        console.log(error);
    }
}
checkConnect();
routes(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
