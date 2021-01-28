import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  useStyles,
  IconButton,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function FavoritesItem() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    console.log('clicked handleFavorite');
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={entry.image} />
      </CardActionArea>
      <CardActions>
        <Box display="flex" justifyContent="center">
          <p>Categories go here!</p>
          <Button variant="contained" onClick={handleFavorite}>Add category</Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default FavoritesItem;
