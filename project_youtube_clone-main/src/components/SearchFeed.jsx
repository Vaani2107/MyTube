import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  // Renamed data array states to decouple code signature from templates
  const [searchResults, setSearchResults] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    // Fetches live feeds based entirely on the active URL search parameter string
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((payload) => setSearchResults(payload.items));
  }, [searchTerm]);

  return (
    <Box p={3} minHeight="95vh" sx={{ backgroundColor: '#0f0f0f' }}>
      {/* Search Header Output Section */}
      <Typography 
        variant="h4" 
        fontWeight="700" 
        color="white" 
        mb={4} 
        ml={{ sm: "100px" }}
        sx={{ letterSpacing: '-0.5px' }}
      >
        Search Results for:{' '}
        {/* Updated accent color from hardcoded red to your brand's electric blue */}
        <span style={{ color: "#00b0ff", fontStyle: 'italic' }}>
          "{searchTerm}"
        </span>
      </Typography>
      
      {/* Videos Display Grid Layout Frame */}
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={searchResults} />
      </Box>
    </Box>
  );
};

export default SearchFeed;