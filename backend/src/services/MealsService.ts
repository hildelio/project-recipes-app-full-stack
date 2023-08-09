import MealsModel from '../database/models/MealsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IMeal from '../Interfaces/IMeal';
import sequelize = require('sequelize');

export default class MealsService {
  constructor(
    private mealsModel = MealsModel,
  ) { }

  // GET ALL MEAL
  public async getAllMeals(): Promise<ServiceResponse<IMeal[]>> {
    const allMeals = await this.mealsModel.findAll();
    return { status: 'SUCCESSFUL', data: allMeals as any };
  }

  // GET MEAL BY NAME
  public async getMealByName(strMeal: string): Promise<ServiceResponse<IMeal[]> | null> {
   const meal = await this.mealsModel.findOne({ where: { strMeal } });
    if (!meal) return null;
    return { status: 'SUCCESSFUL', data: meal as any };
  }

  // GET MEAL BY ID
  public async getMealById(idMeal: string): Promise<ServiceResponse<IMeal[]> | null> {
    const meal = await this.mealsModel.findOne({ where: { idMeal } });
     if (!meal) return null;
     return { status: 'SUCCESSFUL', data: meal as any };
   }

  // GET MEAL BY FIRST LETTER
  public async getMealsByFirstLetter(letter: string): Promise<ServiceResponse<IMeal[]>> {
    const meals = await this.mealsModel.findAll({ where: { strMeal: { [sequelize.Op.like]: `${letter}%` } } });
  
    return { status: 'SUCCESSFUL', data: meals as any };
  }
  

  // MESCLAGEM:

  //  public async getMealByName(req: Request, res: Response) {
  //    // const { strMeal } = req.body
  //    const { strMeal } = req.params;
  //    if (!strMeal || strMeal === undefined) {
  //      const serviceResponse = await this.mealsService.getAllMeals();
  //      res.status(200).json(serviceResponse.data);
  //    }
  //    const serviceResponse = await this.mealsService.getMealByName(strMeal);
  //    if (!serviceResponse) return null;
  //    res.status(200).json(serviceResponse.data);
  //  }

}
