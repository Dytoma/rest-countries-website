import { IconButton, Typography, Paper, CircularProgress } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react';

import { fetchFromAPI } from '../assets/fetchFromAPI';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { AppContext } from '../App';

import { useParams, Link } from 'react-router-dom';

const CountryDetails = () => {
  const [countryDetail, setCountryDetail] = useState(null)
  const { darkMode } = useContext(AppContext);


  const { country } = useParams()
  useEffect(() => {
    fetchFromAPI(`name/${country}`).then((data) => setCountryDetail(data[0]));
  }, [country])

  // first check if the object names is not null or undefined
  if (!countryDetail?.name) return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

  //then if we get back that object, we convert it to an array of values with the Object.values method
  const nativeNames = Object.values(countryDetail?.name?.nativeName);

  // destructure the values in the array that we got back
  const [nativeName] = nativeNames;

  //Once again check the if we actually get that data back
  if (!nativeName) return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

  //if the response is successful, access the data that we want to get
  const commonName = nativeName.common;

  if (!countryDetail?.currencies) return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

  const currencies = Object.values(countryDetail.currencies);

  if (!countryDetail?.languages) return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

  const languages = Object.values(countryDetail?.languages);


  const borders = countryDetail?.borders;


  return (
    <Box sx={{ marginInline: { md: '3rem', lg: '5rem', xs: '1rem' } }}>
      <Link to='/' aria-label='home page'>
        <Paper sx={{ display: 'inline-block', gap: '8px', marginBlock: { md: '3rem', xs: '1.5rem' }, paddingInline: '1.5rem', background: darkMode ? 'hsl(209, 23%, 22%)' : 'white' }} elevation={2}>
          <IconButton sx={{ pl: 0, color: darkMode ? 'white' : '#111517' }}>
            <MdOutlineKeyboardBackspace />
          </IconButton>
          <Typography sx={{ textDecoration: 'none', display: 'inline', fontFamily: 'Nunito Sans', color: darkMode ? 'white' : '#111517' }}>Back</Typography>
        </Paper>
      </Link>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        alignItems={{ md: 'center', xs: 'start' }}
        justifyContent='start'
        gap={{ md: '7.75rem' }}
      >
        {countryDetail ?
          <>
            <img src={countryDetail?.flags?.svg} className='country-detail' />
            <Box sx={{ flex: '1' }}>
              <Typography sx={{ fontFamily: 'Nunito Sans', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.065em', mt: { md: 0, xs: '2.5rem', color: darkMode ? 'white' : '#111517' } }} variant='subtitle1'>{countryDetail?.name?.common}</Typography>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={{ md: 'space-between', xs: 'start' }}
                sx={{ marginBlock: '2rem' }}
              >
                <Box>
                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Native Name:</span> {commonName}
                  </Typography>

                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Population:</span> {countryDetail?.population.toLocaleString('en-US')}
                  </Typography>

                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Region:</span> {countryDetail?.region}
                  </Typography>

                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Sub Region:</span> {countryDetail?.subregion}
                  </Typography>

                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Capital:</span> {countryDetail?.capital[0] ? countryDetail?.capital[0] : 'None'}
                  </Typography>
                </Box>

                <Box sx={{ marginBlock: { md: 0, xs: '2.5rem' } }}>
                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Top Level Domain:</span> {countryDetail?.tld ? countryDetail?.tld[0] : ''}
                  </Typography>
                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Currencies:</span> {currencies.map((currency) => (`${currency?.name} `))}
                  </Typography>
                  <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans' }}>
                    <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '600', color: darkMode ? 'white' : '#111517' }}>Languages:</span> {languages.toString()}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant='subtitle2' sx={{ color: darkMode ? 'white' : '#111517', fontFamily: 'Nunito Sans', mb: { xs: '3rem', md: 0 } }}>
                <span style={{ fontSize: '1rem', letterSpacing: '-0.065em', fontWeight: '700', color: darkMode ? 'white' : '#111517' }}>Border Countries:</span> {borders ? borders.map((border, id) => (<Paper elevation={2} key={id} sx={{ display: 'inline-block', mr: '0.7rem', px: '1rem', fontFamily: 'Nunito Sans', color: darkMode ? 'white' : '#111517', background: darkMode ? 'hsl(209, 23%, 22%)' : '#fff' }}>{border}</Paper>)) : 'No border'}
              </Typography>
            </Box></> :

          <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
        }
      </Stack>

    </Box>
  )
}

export default CountryDetails