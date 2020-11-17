import { Router } from "express";
import admin from './admin';
import auth from '../../middleware/auth'

const router = Router();

router.use('/admin', auth, admin);

export default router;
