import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

function SearchItem() {
  const [faved, setFaved] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    console.log('clicked handleFavorite');
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia image={entry.image} />
      </CardActionArea>
      <CardActions>
        <Box display="flex" justifyContent="center">
          <IconButton onClick={handleFavorite}>
            {faved ? <FavoriteBorder /> : <Favorite />}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default SearchItem;
