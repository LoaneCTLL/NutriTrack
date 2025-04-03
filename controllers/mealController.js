const Meal = require('../models/Meal');

exports.addMeal = async (req, res) => {
  try {
    const newMeal = new Meal(req.body);
    await newMeal.save();
    res.json(newMeal);
  } catch (err) {
    res.status(500).json({ msg: "Erreur lors de l'ajout du repas" });
  }
};

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ msg: "Erreur lors de la récupération des repas" });
  }
};