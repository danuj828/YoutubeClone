import React, { useState } from "react";
import axios from "axios";
import { GOOGLE_API_KEY } from "../Utils/Api";

const YouTubeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const searchYouTube = async () => {
    try {
      const apiKey = GOOGLE_API_KEY;
      const maxResults = 5;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=${maxResults}&key=${apiKey}`
      );
      setResults(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter your search query"
      />
      <button onClick={searchYouTube}>Search</button>
      <div>
        {results.map((item) => (
          <div key={item.id.videoId}>
            <h3>{item.snippet.title}</h3>
            <a
              href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
