import MealsModel from '../database/models/MealsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IMeal from '../Interfaces/IMeal';

export default class MealsService {
  constructor(
    private mealsModel = MealsModel,
  ) { }

  public async getAllMeals(): Promise<ServiceResponse<IMeal[]>> {
    const allMeals = await this.mealsModel.findAll();
    return { status: 'SUCCESSFUL', data: allMeals as any };
  }

  public async getMealByName(strMeal: string): Promise<ServiceResponse<IMeal[]> | null> {
   const meal = await this.mealsModel.findOne({ where: { strMeal } });
    if (!meal) return null ;
    return { status: 'SUCCESSFUL', data: meal as any };
  }

}
