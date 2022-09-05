//global settings and dependencies
const express = require('express');
const router = express.Router();
const newWord = require('../controllers/newWord');

//get new word
router.get('/', newWord.getNewWord, (req, res) => {
  return res.status(200).json(res.locals.newWord);
  // return res.resolve(200, json(res.locals.newWord));
});

//post

//delete

module.exports = router;
