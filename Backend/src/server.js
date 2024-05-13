import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import session from 'express-session';
import MongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser';
import routerUser from './routes/users.routes.js';
import routerFood from './routes/food.routes.js';
import routerDesserts from './routes/desserts.routes.js';
import routerDrinks from './routes/drinks.routes.js';

const server = express();

server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());

server.use(cors({
    origin: [process.env.URL_FRONT],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: true
}));


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

const api = process.env.API_SECRET

server.use(api, routerUser); // USUARIO
server.use('/', routerFood); // COMIDAS
server.use('/', routerDesserts); // POSTRES
server.use('/', routerDrinks); // BEBIDAS




export default server;