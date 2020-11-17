import { Router } from 'express';
import signup from './access/signup';
import admin from './admin';
import auth from '../../middleware/auth'

const router = Router();

router.use('/signup', signup);
router.use('/admin', auth, admin);

export default router;
