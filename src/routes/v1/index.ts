import { Router } from 'express';
import signup from './access/signup';
import signin from './access/signin';
import admin from './admin';
import auth from '../../middleware/auth'

const router = Router();

router.use('/signup', signup);
router.use('/signin', signin);
router.use('/admin', auth, admin);

export default router;
