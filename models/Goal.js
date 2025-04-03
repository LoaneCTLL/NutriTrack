const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  caloriesJournalieres: { type: Number, required: true },
  proteines: { type: Number, required: true },
  glucides: { type: Number, required: true },
  lipides: { type: Number, required: true }
});

module.exports = mongoose.model('Goal', goalSchema);