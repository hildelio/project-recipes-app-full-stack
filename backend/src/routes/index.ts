import { Router } from 'express';
import mealsRouter from './mealsRoutes';

const router = Router();

router.use('/meals', mealsRouter);

export default router;
