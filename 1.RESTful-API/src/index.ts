import bodyParser from 'body-parser';
import ProfileRouter from './routes/profile.route';
import SignInRouter from './routes/signIn.route';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());

app.use('/api/v1/', SignInRouter);
app.use('/api/v1/profile', ProfileRouter);

module.exports = app;
