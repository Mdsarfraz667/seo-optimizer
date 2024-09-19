const express = require('express');
const router = express.Router();
const { getKeywordSuggestions } = require('../controllers/keywordResearchController');

router.get('/', getKeywordSuggestions);

module.exports = router;
