import React from 'react';
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ 
      position: "sticky", 
      background: '#0f0f0f', // Swapped stark #000 for your platform's dark slate theme color
      top: 0, 
      justifyContent: "space-between",
      zIndex: 100, // Explicitly locked z-index layer to guarantee it floats over scrollable video feeds smoothly
      borderBottom: '1px solid #1e1e1e' // Added a modern minimal divider stroke to frame the header cleanly
    }}
  >
    {/* Clean, descriptive branding wrap anchor */}
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: 'none' }}>
      <img src={logo} alt="MyTube Logo" height={40} style={{ objectFit: 'contain' }} />
    </Link>
    
    {/* Global Search Component Hook */}
    <SearchBar />
  </Stack>
);

export default Navbar;