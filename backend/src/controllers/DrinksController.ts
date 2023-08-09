import { Request, Response } from 'express';
import DrinksService from '../services/DrinksService';

export default class DrinksController {
  constructor(
    private drinksService = new DrinksService(),
  ) { }

  //GET ALL DRINKS
  public async getAllDrinks(req: Request, res: Response) {
    const serviceResponse = await this.drinksService.getAllDrinks();
    res.status(200).json(serviceResponse.data);
  }
  //GET DRINK BY NAME
 public async getDrinkByName(req: Request, res: Response) {
  //  const { strDrink } = req.body
   const { strDrink } = req.params;
   const serviceResponse = await this.drinksService.getDrinkByName(strDrink);
   if (!serviceResponse) return null;
   res.status(200).json(serviceResponse.data);
 }

   // GET DRINK BY FIRST LETTER
  public async getMDrinkByFirstLetter(req: Request, res: Response) {
    const { letter } = req.params;
    const serviceResponse = await this.drinksService.getDrinkByFirstLetter(letter);
    if (!serviceResponse) return null;
    res.status(200).json(serviceResponse.data);
  }

}