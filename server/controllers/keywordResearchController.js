const axios = require('axios');

exports.getKeywordSuggestions = async (req, res) => {
    try {
        const { keyword } = req.query;
        // Replace with actual API call
        const response = await axios.get(`https://api.example.com/keywords`, {
            params: { keyword },
            headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching keyword suggestions', error });
    }
};
