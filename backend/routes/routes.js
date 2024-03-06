const express = require('express');
const router = express.Router();
const storyController=require('../controllers/storyController')

router.post('/add-story',storyController.createStory);
router.get('/get-story',storyController.getStory);



module.exports = router;