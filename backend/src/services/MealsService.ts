import MealsModel from '../database/models/MealsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IMeal from '../Interfaces/IMeal';

export default class TeamsService {
  constructor(
    private mealsModel = MealsModel,
  ) { }

  public async getAllMeals(): Promise<ServiceResponse<IMeal[]>> {
    const allTeams = await this.mealsModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

}
// coment