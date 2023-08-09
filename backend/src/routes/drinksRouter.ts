import { Request, Router, Response } from 'express';
import DrinksController from '../controllers/DrinksController';

const drinksController = new DrinksController();

const drinksRouter = Router();


// drinksRouter.get('/:letter', (req: Request, res: Response) => drinksController.getMDrinkByFirstLetter(req, res));
// drinksRouter.get('/:strDrink', (req: Request, res: Response) => drinksController.getDrinkByName(req, res));
drinksRouter.get('/:idDrink', (req: Request, res: Response) => drinksController.getDrinkById(req, res));
drinksRouter.get('/', (req: Request, res: Response) => drinksController.getAllDrinks(req, res));


export default drinksRouter;