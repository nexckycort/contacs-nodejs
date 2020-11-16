import { Router } from "express";
import contacts from './contacts';

const router = Router();

router.use('/', contacts);

export default router;