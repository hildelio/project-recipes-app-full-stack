import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeMeals extends
  Model<InferAttributes<SequelizeMeals>, InferCreationAttributes<SequelizeMeals>> {
  declare idMeal: CreationOptional<number>;
  declare strMeal: string;
  declare strCategory: string;
  declare strArea: string;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strIngredient1: string;
  declare strIngredient2: string;
  declare strIngredient3: string;
  declare strIngredient4: string;
  declare strIngredient5: string;
  declare strIngredient6: string;
  declare strIngredient7: string;
  declare strIngredient8: string;
  declare strIngredient9: string;
  declare strIngredient10: string;
  declare strIngredient11: string;
  declare strIngredient12: string;
  declare strIngredient13: string;
  declare strIngredient14: string;
  declare strIngredient15: string;
  declare strIngredient16: string;
  declare strIngredient17: string;
  declare strIngredient18: string;
  declare strIngredient19: string;
  declare strIngredient20: string;
  declare strMeasure1: string;
  declare strMeasure2: string;
  declare strMeasure3: string;
  declare strMeasure4: string;
  declare strMeasure5: string;
  declare strMeasure6: string;
  declare strMeasure7: string;
  declare strMeasure8: string;
  declare strMeasure9: string;
  declare strMeasure10: string;
  declare strMeasure11: string;
  declare strMeasure12: string;
  declare strMeasure13: string;
  declare strMeasure14: string;
  declare strMeasure15: string;
  declare strMeasure16: string;
  declare strMeasure17: string;
  declare strMeasure18: string;
  declare strMeasure19: string;
  declare strMeasure20: string;
  declare strSource: string;
}

SequelizeMeals.init(
  {
    idMeal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    strMeal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strArea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strInstructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMealThumb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strTags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strYoutube: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient10: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient13: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient14: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient15: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient16: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient17: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient18: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient19: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strIngredient20: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure10: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure13: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure14: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure15: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure16: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure17: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure18: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure19: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMeasure20: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strSource: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    tableName: 'meals',
    modelName: 'Meals',
    // underscored: true,
  },
);

export default SequelizeMeals;
