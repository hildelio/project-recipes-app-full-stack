import { Router } from 'express';
import mealsRouter from './mealsRoutes';
import drinksRouter from './drinksRouter';

const router = Router();

router.use('/meals', mealsRouter);
router.use('/drinks', drinksRouter);

export default router;
