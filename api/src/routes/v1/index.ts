import express from 'express';
import signup from './access/signup';
import signin from './access/signin';
import auth from '../../middleware/auth';
import admin from './admin';

const router = express.Router();

router.use('/signup', signup);
router.use('/signin', signin);
router.use('/admin', auth, admin);

export default router;
