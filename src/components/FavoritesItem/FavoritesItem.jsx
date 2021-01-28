import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';
import { AddCircle, DeleteOutlineIcon } from '@material-ui/icons';

function FavoritesItem({ entry }) {
  const dispatch = useDispatch();
  console.log(entry.image_url);
  const handleFavorite = () => {
    console.log('clicked handleFavorite');
  };

  return (
    <Card elevation={4}>
      <CardActionArea>
        <Box p={2}>
          <img src={entry.image_url} />
        </Box>
      </CardActionArea>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CardActions>
          <Button
            variant="contained"
            onClick={handleFavorite}
            endIcon={<AddCircle />}
          >
            Add
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

{
  /* <Card elevation={4}>
  <CardActionArea>
    <Box p={2}>
      <img src={entry.image_url} />
    </Box>
  </CardActionArea>
  <Box display="flex" justifyContent="center" alignItems="center">
    <CardActions>
      {!faved ? (
        <IconButton onClick={handleFavorite}>
          <FavoriteBorder />
        </IconButton>
      ) : (
        <IconButton>
          <Favorite color="secondary" />
        </IconButton>
      )}
    </CardActions>
  </Box>
</Card>; */
}

export default FavoritesItem;
