import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { AppContext } from '../App';
import { motion } from 'framer-motion';
import { Item } from '../assets/animation';


const CountryCard = ({ country }) => {

  const { darkMode } = useContext(AppContext)
  return (
    <motion.div variants={Item}>
      <Card sx={{ maxWidth: '16.5rem', background: darkMode ? 'hsl(209, 23%, 22%)' : '#fff' }}>
        <Link to={`/countries/${country?.name?.common}`}>
          <CardMedia
            image={country?.flags?.png}
            alt={country?.flags?.alt}
            sx={{ width: '16.5rem', height: '10rem' }}
          />
        </Link>
        <CardContent
          sx={{ background: darkMode ? 'hsl(209, 23%, 22%)' : '#fff', height: 174, color: darkMode ? 'white' : '' }}
        >
          <Typography sx={{ fontFamily: 'Nunito Sans', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.065em' }} variant='subtitle1'>
            {country?.name?.common}
          </Typography>

          <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Population:</span> {country?.population.toLocaleString('en-US')}
          </Typography>

          <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Region:</span> {country?.region}
          </Typography>

          <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Capital:</span> {country?.capital}
          </Typography>

        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CountryCard