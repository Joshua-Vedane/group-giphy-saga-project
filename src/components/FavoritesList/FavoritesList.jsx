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
    <Grid container>
      {favorites.map((entry, i) => {
        return (
          <Grid item>
            <FavoritesItem key={entry} entry={entry} />
          </Grid>
        );
      })}
      <div>

      </div>
    </Grid>
  );
}

export default FavoritesList;
