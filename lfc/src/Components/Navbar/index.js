import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useNavigate } from 'react-router-dom';

const pages = [
  {
    label: "Home",
    key: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Activities",
    key: "/activities",
    icon: <TaskAltIcon />,
  },
  {
    label: "Bible",
    key: "/bible",
    icon: <MenuBookIcon />,
  },
  {
    label: "Songs",
    key: "/songs",
    icon: <LibraryMusicIcon />,
  },
];

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const reRoute = (page) => {
    navigate(`${page}`);
  };
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       {pages.map((page) => (
            <BottomNavigationAction
              onClick={() => reRoute(page.key)}
              key={page.key}
              label={page.label}
              icon={page.icon}
            />
          ))}
      </BottomNavigation>
    </Box>
  );
}