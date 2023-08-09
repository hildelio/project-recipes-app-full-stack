import sequelize = require('sequelize');
import DrinksModel from '../database/models/DrinksModel';
import IDrink from '../Interfaces/IDrink';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MealsService {
  constructor(
    private drinksModel = DrinksModel,
  ) { }

  // GET ALL DRINKS
  public async getAllDrinks(): Promise<ServiceResponse<IDrink[]>> {
    const allDrinks = await this.drinksModel.findAll();
    return { status: 'SUCCESSFUL', data: allDrinks as any };
  }

  // GET DRINKS BY NAME
  public async getDrinkByName(strDrink: string): Promise<ServiceResponse<IDrink[]> | null> {
    const drink = await this.drinksModel.findOne({ where: { strDrink } });
     if (!drink) return null;
     return { status: 'SUCCESSFUL', data: drink as any };
   }

  // GET DRINKS BY FIRST LETTER
  public async getDrinkByFirstLetter(letter: string): Promise<ServiceResponse<IDrink[]> | null> {
    const drink = await this.drinksModel.findAll({ where: { strDrink: { [sequelize.Op.like]: `${letter}%` } } });
    return { status: 'SUCCESSFUL', data: drink as any };
  }
}