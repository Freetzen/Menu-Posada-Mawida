import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import session from 'express-session';
import MongoStore from 'connect-mongo'
import router from './routes/index.js';

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.URLMONGODB,
        ttl: 120
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: false
}))

server.use(router);



export default server; 