const express = require('express');
const router = express.Router();
const storyController=require('../controllers/storyController')

router.post('/add-story',storyController.createStory);
router.get('/get-story',storyController.getStory);
router.post('/add-story-heighlight',storyController.createStoryHeighlight);
router.get('/get-story-heighlight',storyController.getStoryHeighlight);
router.post('/add-suggestion',storyController.createSuggestion);
router.get('/get-suggestion',storyController.getSuggestion);







module.exports = router;