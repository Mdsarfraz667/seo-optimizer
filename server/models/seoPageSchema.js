const mongoose = require('mongoose');

const SeoPageSchema = new mongoose.Schema({
    pageType: { type: String, required: true },
    content: { type: String, required: true },
});

module.exports = mongoose.model('SeoPage', SeoPageSchema);