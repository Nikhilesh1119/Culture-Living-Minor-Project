import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Router from './src/routers/routers.js';
import { configDB } from './src/config/DBConfig.js';


const app = express();
app.use(cors());
app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({limit: '200mb',extended: true }));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(Router);
app.use(morgan('tiny'));
configDB().then(()=>{
    try {
        const port = 4500;
        app.listen(port,()=>{
            console.log('server is running on '+port);
        })
    } catch (error) {
        
    }
}).catch((error)=>{
    console.log('Invalid Database Connection!');
})

