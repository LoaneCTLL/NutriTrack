const express = require('express');
const router = express.Router();
const { setGoal, getGoal } = require('../controllers/goalController');

router.post('/goals', setGoal);
router.get('/goals', getGoal);

module.exports = router;