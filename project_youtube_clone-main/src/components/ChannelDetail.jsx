import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./"; 
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [profileData, setProfileData] = useState(null);
  const [creatorVideos, setCreatorVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const loadChannelData = async () => {
      const channelResponse = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setProfileData(channelResponse?.items[0]);

      const videoResponse = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setCreatorVideos(videoResponse?.items);
    };

    loadChannelData();
  }, [id]);

  return (
    <Box minHeight="95vh" sx={{ backgroundColor: '#0f0f0f' }}>
      <Box>
        <Box 
          sx={{
            height: '280px',
            background: 'linear-gradient(135deg, #001220 0%, #002244 50%, #00b0ff 100%)',
            zIndex: 10,
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.6)'
          }} 
        />
        <ChannelCard channelDetail={profileData} marginTop="-100px" />
      </Box>
      
      <Box p={3} display="flex">
        <Box sx={{ mr: { sm: '80px', md: '120px' } }} />
        <Videos videos={creatorVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;