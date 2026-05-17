import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [mediaItems, setMediaItems] = useState(null);

  useEffect(() => {
    setMediaItems(null);

    fetchFromAPI(`search?part=snippet&q=${activeCategory}`)
      .then((payload) => setMediaItems(payload.items));
  }, [activeCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, backgroundColor: '#0f0f0f' }}>
      {/* Sidebar Navigation Panel Workspace */}
      <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: "1px solid #1e1e1e", px: { xs: 0, md: 2 } }}>
        {/* FIX: Updated the prop names to match your Sidebar component's updated properties */}
        <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <Typography className="copyright-notice" variant="body2" sx={{ mt: 2, color: "#777", fontSize: '11px', letterSpacing: '0.5px' }}>
          &copy; {new Date().getFullYear()} MyTube Media Platform. All rights reserved.
        </Typography>
      </Box>

      {/* Main Video Grid Explorer Stream Canvas */}
      <Box p={3} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="700" mb={3} sx={{ color: "white", letterSpacing: '-0.5px' }}>
          {activeCategory} <span style={{ color: "#00b0ff" }}>Videos</span>
        </Typography>

        <Videos videos={mediaItems} />
      </Box>
    </Stack>
  );
};

export default Feed;