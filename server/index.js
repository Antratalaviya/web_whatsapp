import express from 'express';
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config(); 

const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/api/v1/user', userRoutes);

app.get("/", (req, res)=> {
    res.send("connected")
})

const startServer = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

startServer();
