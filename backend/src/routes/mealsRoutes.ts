import { Request, Router, Response } from 'express';
import MealsController from '../controllers/MealsController';

const mealsController = new MealsController();

const mealsRouter = Router();


mealsRouter.get('/', (req: Request, res: Response) => mealsController.getMealByName(req, res));
// mealsRouter.get('/', (req: Request, res: Response) => mealsController.getAllMeals(req, res));


export default mealsRouter;