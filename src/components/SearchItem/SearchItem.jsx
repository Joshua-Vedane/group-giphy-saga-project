import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

function SearchItem({ entry }) {
  const [faved, setFaved] = useState(false);
  const dispatch = useDispatch();
  const image = entry.images.fixed_height.url;

  const handleFavorite = () => {
    console.log('clicked handleFavorite');
    setFaved(true);
    dispatch({type: 'POST_GIF', payload: {image_url: image}})
  };

  return (
    <Card elevation={4}>
      <CardActionArea>
        <Box p={2}>
          <img src={image} />
        </Box>
      </CardActionArea>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CardActions>
          <IconButton onClick={handleFavorite}>
            {faved ? <Favorite color="secondary" /> : <FavoriteBorder />}
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default SearchItem;
