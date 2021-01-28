import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

function FavoritesItem({entry}) {
  const dispatch = useDispatch();
  let gif = entry.image_url;
  const handleFavorite = () => {
    console.log('clicked handleFavorite');
  };

  return (
    <Card>
      <CardActionArea>
      <img src={`${gif}`}/>
      </CardActionArea>
      <CardActions>
        <Box display="flex" justifyContent="center">
          <p>Categories go here!</p>
          <Button variant="contained" onClick={handleFavorite}>
            Add category
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default FavoritesItem;
