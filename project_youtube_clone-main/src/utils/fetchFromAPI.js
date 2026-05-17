import axios from 'axios';

// Ensure the Base URL doesn't have an accidentally hidden trailing character
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  // Cleans the URL path argument to prevent string formatting mismatch errors
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  
  const { data } = await axios.get(`${BASE_URL}/${cleanUrl}`, options);

  return data;
};