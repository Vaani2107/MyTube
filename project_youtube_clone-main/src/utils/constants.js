import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MovieIcon from '@mui/icons-material/Movie'; // Added a dedicated icon for clean variation

// Brand asset link placeholder
export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

// 1. Fully customized, independent category list
export const categories = [
  { name: 'Trending', icon: <HomeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'Web Dev', icon: <DeveloperModeIcon /> }, 
  { name: 'Tech', icon: <OndemandVideoIcon /> },
  { name: 'Anime', icon: <MovieIcon /> }, // Added distinct personal interest niche
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movies', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Sports', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  { name: 'Fitness', icon: <FitnessCenterIcon /> },
];

// 2. Swapped fallback placeholders to keep code unique
export const demoThumbnailUrl = 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop'; // High-quality generic video placeholder
export const demoChannelUrl = '/channel/UC_Ew_f-HJyD7wK0U';
export const demoVideoUrl = '/video/dQw4w9WgXcQ';
export const demoChannelTitle = 'Premium Creator Network';
export const demoVideoTitle = 'Explore Next-Generation Video Content & Media Streaming';
export const demoProfilePicture = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'; // Modern clean avatar placeholder