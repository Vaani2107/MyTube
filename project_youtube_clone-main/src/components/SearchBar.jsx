import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      // Directs client routing to your personalized search results page path
      navigate(`/search/${searchQuery.trim()}`);
      setSearchQuery('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSearchSubmit}
      sx={{
        borderRadius: '24px', // Upped from 20 for a smoother pill layout match
        border: '1px solid #222', // Swapped stark white border for a subtle dark trim
        pl: 2,
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.2)', // Sleek inset depth look
        mr: { sm: 5 },
        backgroundColor: '#1a1a1a', // Dark interior field fill to blend with dark mode
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <input
        className='search-bar'
        placeholder='Discover videos, creators...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ color: '#fff', backgroundColor: 'transparent' }} // Ensured text displays white inside dark input
      />
      
      {/* Updated icon button color from red to your signature electric blue accent */}
      <IconButton 
        type='submit' 
        sx={{ 
          p: '10px', 
          color: '#00b0ff',
          transition: 'color 0.2s ease',
          '&:hover': { color: '#0091ea' } 
        }} 
        aria-label='search-button'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;