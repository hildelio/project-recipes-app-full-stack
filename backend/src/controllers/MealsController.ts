import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  constructor(
    private mealsService = new TeamsService(),
  ) { }

  public async getAllMeals(_req: Request, res: Response) {
    const serviceResponse = await this.teamsService.getAllMeals();
    res.status(200).json(serviceResponse.data);
  }

}