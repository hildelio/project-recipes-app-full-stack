import { Request, Response } from 'express';
import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(
    private mealsService = new MealsService(),
  ) { }

  public async getAllMeals(_req: Request, res: Response) {
    const serviceResponse = await this.mealsService.getAllMeals();
    res.status(200).json(serviceResponse.data);
  }

  public async getMealByName(req: Request, res: Response) {
    // const { mealNameBody } = req.body
    const { strMeal } = req.params;
    const serviceResponse = await this.mealsService.getMealByName(strMeal);
    if (!serviceResponse) return null;
    res.status(200).json(serviceResponse.data);
  }

}