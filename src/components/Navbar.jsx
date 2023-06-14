import React, { useContext, useEffect } from 'react';
import { Stack, Paper, Typography, Box, Button } from '@mui/material';
import { AppContext } from '../App';

import { BsMoon } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';


const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  //if the darkMode is on, add the class 'dark' to the html.
  
  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [darkMode])
  return (
    <Box>
      <Paper elevation={2} sx={{
        paddingInline: {lg: '5rem', md: '2.5rem', xs: '1rem'},
        paddingBlock: '1.5rem',
        borderRadius: 0,
        backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : ''
      }}>
        <Stack justifyContent='space-between' direction='row'>
          <Typography
            sx={{ fontWeight: '800', fontSize: {md: '1.5rem', xs: '0.875rem'}, color: darkMode ? 'white' : '' }}
          >
            Where in the world?
          </Typography>
          <Stack direction='row' gap={1} alignItems='center' sx={{ fontWeight: '500', fontSize: { md: '1rem', xs: '0.75rem' } }}>
            <span
            >
              {darkMode ?
                <button style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', color: darkMode ? 'white' : '' }}
                  onClick={() => {
                    setDarkMode(false);
                    if (darkMode) {
                      localStorage.setItem("theme", "dark");
                    } else {
                      localStorage.setItem("theme", "light");
                    }
                  }}
                  aria-label='Light theme'
                >
                  <BiSun />
                </button> : 
                
                <button style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}
                  onClick={() => {
                    setDarkMode(true);
                    if (darkMode) {
                      localStorage.setItem("theme", "dark");
                    } else {
                      localStorage.setItem("theme", "light");
                    }
                  }}
                  aria-label='Dark theme'
                >
                  <BsMoon />
                </button>
              }
            </span>
            <span style={{ color: darkMode ? 'white' : '' }}>
              <Typography sx={{ fontWeight: '500', fontSize: {md: '1rem', xs: '0.75rem'} }}>
                { darkMode ? "Light" : "Dark"} Mode
              </Typography>
            </span>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Navbar