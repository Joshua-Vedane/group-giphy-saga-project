import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

function FavoritesItem({ entry }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const addCategoryToGif = (clickedText) => {
    setCategory(clickedText);
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_FAV', payload: entry.id });
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Card elevation={4}>
      <CardActionArea>
        <Box paddingTop={2} paddingLeft={2} paddingRight={2}>
          <img src={entry.image_url} />
        </Box>
      </CardActionArea>
      <CardContent>
        <Box minHeight={25}>
          <Typography variant="body1" align="center">
            {category}
          </Typography>
        </Box>
      </CardContent>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardActions>
          <Button color="primary" onClick={handleOpenMenu}>
            Categories
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => addCategoryToGif('')}>
              <em>none</em>
            </MenuItem>
            <MenuItem onClick={() => addCategoryToGif('funny')}>Funny</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('odd')}>Odd</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('cartoon')}>Cartoon</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('spicy')}>Spicy</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('meme')}>Meme</MenuItem>
          </Menu>
          <IconButton onClick={handleDelete}>
            <DeleteOutline />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default FavoritesItem;
