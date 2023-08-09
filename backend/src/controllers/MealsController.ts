import { Request, Response } from 'express';
import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(
    private mealsService = new MealsService(),
  ) { }

  //GET ALL MEAL
  public async getAllMeals(req: Request, res: Response) {
    const serviceResponse = await this.mealsService.getAllMeals();
    res.status(200).json(serviceResponse.data);
  }
  
  //GET MEAL BY NAME
  public async getMealByName(req: Request, res: Response) {
    // const { strMeal } = req.body
    const { strMeal } = req.params;
    const serviceResponse = await this.mealsService.getMealByName(strMeal);
    if (!serviceResponse) return null;
    res.status(200).json(serviceResponse.data);
  }

  // GET MEAL BY FIRST LETTER
  public async getMealByFirstLetter(req: Request, res: Response) {
    const { letter } = req.params;
    const serviceResponse = await this.mealsService.getMealsByFirstLetter(letter);
    if (!serviceResponse) return null;
    res.status(200).json(serviceResponse.data);
  }
}