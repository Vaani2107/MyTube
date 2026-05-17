import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [activeMedia, setActiveMedia] = useState(null);
  const [recommendedFeeds, setRecommendedFeeds] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // 1. Fetch video metadata
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((res) => setActiveMedia(res?.items[0]));

    // 2. Fetch related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((res) => setRecommendedFeeds(res?.items));
  }, [id]);

  if (!activeMedia?.snippet) return <Loader />;

  const { 
    snippet: { title, channelId, channelTitle }, 
  } = activeMedia;

  // ViewCount aur LikeCount ke liye safe fallback settings
  const viewCount = activeMedia?.statistics?.viewCount || 0;
  const likeCount = activeMedia?.statistics?.likeCount || 0;

  return (
    <Box minHeight="95vh" sx={{ backgroundColor: '#0f0f0f' }}>
      <Stack direction={{ xs: "column", md: "row" }} p={1}>
        {/* Main Video Player Section */}
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`} 
              className="react-player" 
              controls={true}
              playing={true}
              width="100%"
            />
            
            <Typography color="#fff" variant="h5" fontWeight="600" p={2} sx={{ letterSpacing: '-0.5px' }}>
              {title}
            </Typography>
            
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" sx={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                  {channelTitle}
                  <VerifiedIcon sx={{ fontSize: "15px", color: "#00b0ff", ml: "6px" }} />
                </Typography>
              </Link>
              
              <Stack direction="row" gap="24px" alignItems="center">
                <Typography variant="body2" sx={{ opacity: 0.6, backgroundColor: '#1a1a1a', px: 2, py: 1, borderRadius: '20px', fontSize: '13px' }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.6, backgroundColor: '#1a1a1a', px: 2, py: 1, borderRadius: '20px', fontSize: '13px' }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        
        {/* Sidebar Recommendations */}
        <Box px={3} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Typography color="#aaa" variant="subtitle2" fontWeight="bold" mb={2} px={1} sx={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px' }}>
            Up Next
          </Typography>
          <Videos videos={recommendedFeeds} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;