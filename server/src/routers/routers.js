import express from 'express';
import { GuestSignup, HostSignup, getHomestays, guestLogin } from '../controllers/controllers.js';
import { checkAuthorize, verifyUser } from '../middlewares/guestMiddleware.js';

const Router = express.Router();

Router.post('/hostsignup',HostSignup);
Router.post('/guestlogin',verifyUser,guestLogin);
Router.post('/guestsignup', GuestSignup);
Router.get('/homestays',checkAuthorize, getHomestays);

export default Router;