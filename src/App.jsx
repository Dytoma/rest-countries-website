import { useState, createContext, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Countries, CountryDetails, Search } from './components'
import { Typography } from '@mui/material';

export const AppContext = createContext(null)

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const value = {
    darkMode,
    setDarkMode
  }

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark')
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <>
      <AppContext.Provider value={value}>
        <Typography sx={{ position: 'absolute', color: darkMode ? 'white' : '#111517', fontSize: "1rem", top: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 0, right: 0, marginInline: 'auto'}}>
          Coded by <a href="https://www.frontendmentor.io/profile/Dytoma" style={{ color: 'hsl(243, 100%, 62%)', textDecoration: 'none' }}>Dytoma</a>.
        </Typography>
        <Navbar />
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path='/Countries/:country' element={<CountryDetails />} />
          <Route path='/search/:searchTerm' element={<Search />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
