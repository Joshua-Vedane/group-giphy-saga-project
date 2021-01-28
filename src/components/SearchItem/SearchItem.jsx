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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

function SearchItem() {
  const [faved, setFaved] = useState(false);
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
          <IconButton onClick={handleFavorite}>
            {faved ? <FavoriteBorder /> : <Favorite />}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default SearchItem;
