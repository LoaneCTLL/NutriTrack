const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  calories: { type: Number, required: true },
  proteines: { type: Number, required: true },
  glucides: { type: Number, required: true },
  lipides: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meal', mealSchema);