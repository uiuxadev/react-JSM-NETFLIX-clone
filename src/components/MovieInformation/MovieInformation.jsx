import React, { useState, useEffect } from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import useStyles from './styles';
import { useGetMovieQuery, useGetRecommendationsQuery, useGetListQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
// import { MovieList } from '..';
// import { userSelector } from '../../features/auth';

const MovieInformation = () => {
  // console.log('movie information');
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetMovieQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }

  // console.log(data);

  return (
    <>
      <Grid container className={classes.containerSpaceAround}>
        {/* title */}
        <Grid item sm={12} lg={4} style={{ display: 'flex', marginBottom: '30px' }}>
          <img
            className={classes.poster}
            // how to write src for image data https://developers.themoviedb.org/3/getting-started/images
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
          />
        </Grid>

        <Grid item container direction="column" lg={7}>
          {/* subtitle, year */}
          <Typography variant="h3" align="center" gutterBottom>
            {data?.title} ({data.release_date.split('-')[0]})
          </Typography>
          {/* tagline */}
          <Typography variant="h5" align="center" gutterBottom>
            {data?.tagline}
          </Typography>

          <Grid item className={classes.containerSpaceAround}>
            {/* rating */}
            <Box display="flex" align="center">
              <Rating readOnly value={data.vote_average / 2} />
              <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
                {data?.vote_average} / 10
              </Typography>
            </Box>
            {/* mins and language */}
            <Typography variant="h6" align="center" gutterBottom>
              {/* {data?.runtime}min | Language: {data?.spoken_languages[0].name} */}
              {data?.runtime}min {data?.spoken_languages.length > 0 ? `| ${data?.spoken_languages[0].name}` : ''}
            </Typography>
          </Grid>

          {/* genre */}
          <Grid item className={classes.genresContainer}>
            {data?.genres?.map((genre) => (
              <Link
                key={genre.name}
                className={classes.links}
                to="/"
                onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              >
                <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
                <Typography color="textPrimary" variant="subtitle1">
                  {genre?.name}
                </Typography>
              </Link>
            )) }
          </Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default MovieInformation;
