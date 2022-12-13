import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
  // to update a page
  const [page, setPage] = useState(1);
  // fetch movie id or category name
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  // give movie id or category name to useGetMoviesQuery
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  // if loading
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  // if the data does not exist
  // for search field
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';

  return (
    <MovieList movies={data} />
  );
};

export default Movies;
