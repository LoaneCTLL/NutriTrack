const Goal = require('../models/Goal');

exports.setGoal = async (req, res) => {
  try {
    const goal = new Goal(req.body);
    await goal.save();
    res.json(goal);
  } catch (err) {
    res.status(500).json({ msg: "Erreur lors de l'ajout de l'objectif" });
  }
};

exports.getGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne();
    res.json(goal);
  } catch (err) {
    res.status(500).json({ msg: "Erreur lors de la récupération de l'objectif" });
  }
};