import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URI = 'mongodb+srv://MRDanesh:DW0IC5p1oETJmDPh@event-post-dev.gfdoy.mongodb.net/<dbname>?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;
app.listen(PORT); 

mongoose.connect (CONNECTION_URI).then(
    console.log(`Server is running on ${PORT}!`)
).catch ((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

