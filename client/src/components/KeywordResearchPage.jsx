import React, { useState } from "react";
import axios from "axios";

const KeywordResearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/keywords`, {
        params: { keyword },
      });
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching keywords:", error);
    }
  };

  return (
    <div>
      <h2>Keyword Research</h2>
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordResearchPage;
