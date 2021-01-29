import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Card, Grid, Paper } from '@material-ui/core';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import { useEffect } from 'react';

function FavoritesList() {
  const dispatch = useDispatch();
  // useSelector to get reducer in index.js
  const favorites = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    dispatch({type: 'FETCH_GIF'})
}, []);

  console.log('logging favorites', favorites);
  console.log(favorites[0].image_url);

  return (
<<<<<<< HEAD
    <Grid container spacing={4} justify="center">
      {favorites.map((entry) => {
=======
    <Grid container>
      {favorites.map((entry, i) => {
>>>>>>> 179af00c26db3e1d3492c17bf2abe8e8e2d5c8ad
        return (
          <Grid item>
            <FavoritesItem key={entry} entry={entry} />
          </Grid>
        );
      })}
<<<<<<< HEAD
      <div></div>
=======
      <div>

      </div>
>>>>>>> 179af00c26db3e1d3492c17bf2abe8e8e2d5c8ad
    </Grid>
  );
}

export default FavoritesList;
