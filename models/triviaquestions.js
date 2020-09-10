"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TriviaQuestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TriviaQuestions.belongsTo(models.Category, { foreignKey: "categoryId" });
      // define association here
    }
  }
  TriviaQuestions.init(
    {
      question: DataTypes.STRING,
      answer1: DataTypes.STRING,
      answer2: DataTypes.STRING,
      answer3: DataTypes.STRING,
      answer4: DataTypes.STRING,
      correctAnswer: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TriviaQuestions",
    }
  );
  return TriviaQuestions;
};
