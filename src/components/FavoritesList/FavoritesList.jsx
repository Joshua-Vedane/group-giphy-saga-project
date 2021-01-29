import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import { useEffect } from 'react';

function FavoritesList() {
  const dispatch = useDispatch();
  // useSelector to get reducer in index.js
  const favorites = useSelector((state) => state.favoriteReducer);

  useEffect(() => dispatch({ type: 'FETCH_GIF' }), []);

  return (
    <Grid container spacing={4} justify="center">
      {favorites.map((entry) => {
        return (
          <Grid item key={entry.id}>
            <FavoritesItem entry={entry} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FavoritesList;
