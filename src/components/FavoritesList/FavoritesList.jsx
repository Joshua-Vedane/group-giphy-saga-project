import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Card, Grid, Paper } from '@material-ui/core';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function FavoritesList() {
  const dispatch = useDispatch();
  // useSelector to get reducer in index.js
  const favorites = useSelector((state) => state.favoriteReducer);
  const image = favorites[1].image_url

  console.log(favorites);
  console.log(favorites[0].image_url);

  return (
    <Grid container>
      {favorites.map((entry) => {
        return (
          <Grid item>
            <FavoritesItem key={entry.id} entry={entry} />
          </Grid>
        );
      })}
      <div>
        
      </div>
    </Grid>
  );
}

export default FavoritesList;
