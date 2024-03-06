const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/create', authorController.createPost);
router.get('/getpost', authorController.getPost);
// router.put('/:id', itemController.updateItem);
// router.delete('/:id', itemController.deleteItem);

module.exports = router;