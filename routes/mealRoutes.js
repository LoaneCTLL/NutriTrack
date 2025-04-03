const express = require('express');
const router = express.Router();
const { addMeal, getMeals } = require('../controllers/mealController');

router.post('/meals', addMeal);
router.get('/meals', getMeals);

module.exports = router;