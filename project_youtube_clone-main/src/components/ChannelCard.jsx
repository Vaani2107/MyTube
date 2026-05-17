import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified'; 
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: '0px 4px 20px rgba(0,0,0,0.15)', 
      borderRadius: '16px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '100%', sm: '356px', md: '320px' }, 
      height: '326px',
      margin: 'auto',
      marginTop,
      backgroundColor: '#1a1a1a', 
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      '&:hover': {
        transform: 'translateY(-4px)', 
        boxShadow: '0px 8px 30px rgba(0, 176, 255, 0.15)', 
      }
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: 'none' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, mx: 'auto', border: '2px solid #333' }}
        />
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600' }}>
          {channelDetail?.snippet?.title}{' '}
          <VerifiedIcon sx={{ fontSize: '16px', color: '#00b0ff', ml: '6px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#aaa', mt: 0.5 }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;