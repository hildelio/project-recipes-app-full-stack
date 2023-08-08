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

}
