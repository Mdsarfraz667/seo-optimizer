// config/semrushApi.js
const axios = require('axios');
require('dotenv').config();

const semrushApiKey = process.env.SEMRUSH_API_KEY;

// Function to get keywords for a domain
async function getKeywordsForDomain(domain) {
    const url = `https://api.semrush.com/?type=domain_organic&key=${semrushApiKey}&display_limit=10&export_columns=Ph,Pp,Nq&domain=${domain}&database=us`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching keywords from SEMrush:', error);
        throw error;
    }
}

module.exports = { getKeywordsForDomain };
