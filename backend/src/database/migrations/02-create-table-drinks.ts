/* eslint-disable max-lines-per-function */
import { Model, QueryInterface, DataTypes } from 'sequelize';
import IDrink from '../../Interfaces/IDrink';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrink>>('drinks', {
      idDrink: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      strDrink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strTags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strVideo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIBA: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strAlcoholic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strGlass: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strInstructions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strInstructionsES: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strInstructionsDE: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strInstructionsFR: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strInstructionsIT: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strInstructionsZHHANS:{
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strInstructionsZHHANT: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strDrinkThumb: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient13: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient14: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient15: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure13: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure14: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure15: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strImageSource: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strImageAttribution: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strCreativeCommonsConfirmed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateModified: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals');
  },
};
