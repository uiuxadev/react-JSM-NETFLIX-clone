import React, { useState, useEffect } from 'react';
import { Box, CirularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movie = () => {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return (
    <MovieList movies={data} />
  );
};

export default Movie;
