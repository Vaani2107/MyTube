import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

// Kept simple but fully matched to your app's premium dark layout signature
const Loader = () =>  (
  <Box minHeight="95vh" sx={{ backgroundColor: '#0f0f0f' }}>
    <Stack 
      direction="row" 
      justifyContent="center" 
      alignItems="center" 
      height="80vh"
    >
      {/* Configured your custom electric blue accent color directly onto the loading track */}
      <CircularProgress sx={{ color: '#00b0ff' }} size={50} thickness={4.5} />
    </Stack>
  </Box>
);

export default Loader;