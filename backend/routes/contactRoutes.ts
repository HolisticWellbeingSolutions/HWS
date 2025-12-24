import express from 'express';
import handler from "../controllers/contact"

const router = express.Router();

router.post('/', handler);

export default router;