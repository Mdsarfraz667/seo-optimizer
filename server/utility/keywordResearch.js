// src/keywordResearch.js
const { getKeywordsForDomain } = require('../config/semrushAPI');
const fs = require('fs');

// Competitor Domains (You can add or change competitors based on your industry)
const competitors = [
    'example1.com',
    'example2.com',
    'example3.com',
];

// Analyze competitor keywords and write them to a file
async function analyzeCompetitorKeywords() {
    let report = 'Keyword, Search Volume, Position\n';

    for (const domain of competitors) {
        console.log(`Fetching keywords for ${domain}...`);

        try {
            const keywordData = await getKeywordsForDomain(domain);

            // Example: SEMrush returns data as CSV-like format, so we can parse it
            // You might need a CSV parsing library if handling complex data
            report += keywordData;
        } catch (error) {
            console.error(`Error fetching data for ${domain}`);
        }
    }

    // Save report to a file
    fs.writeFileSync('competitor_keyword_report.csv', report);
    console.log('Report saved as competitor_keyword_report.csv');
}

module.exports = analyzeCompetitorKeywords;
