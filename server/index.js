import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URI = 'mongodb+srv://MRDanesh:hStaliUEdcMblNiV@event-post-dev.gfdoy.mongodb.net/<dbname>?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;
app.listen(PORT); 

mongoose.connect (CONNECTION_URI).then(
    console.log(`Server is running on ${PORT}!`)
).catch ((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);
