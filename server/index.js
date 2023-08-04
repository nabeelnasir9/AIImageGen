import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js';
import  postRoutes  from './routes/PostRoutes.js';
import dalleRoutes  from './routes/dalleRoutes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.get('/', async (req,res)=>{
res.send('Hello from nabeel');
});

const startServer =async() => {
    try {
        connectDb("mongodb+srv://nasirnabeel36:Helloboy0251@cluster0.d7jkxao.mongodb.net/?retryWrites=true&w=majority");
        app.listen(8080,()=> console.log("my server is running in http://localhost:8080"))
    } catch (error) {
        console.log(error)
    }
}

startServer();