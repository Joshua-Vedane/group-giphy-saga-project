import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Card, Grid, Paper } from '@material-ui/core';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function FavoritesList() {
  const dispatch = useDispatch();
  // useSelector to get reducer in index.js
  const favorites = useSelector((state) => state.favoriteReducer);

  return (
    <Grid container>
      {favorites.map((entry) => {
        return (
          <Grid item>
            <FavoritesItem key={entry.id} entry={entry} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FavoritesList;
