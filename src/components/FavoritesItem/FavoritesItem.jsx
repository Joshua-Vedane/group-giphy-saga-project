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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { useEffect } from 'react';

function FavoritesItem({ entry }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const categoryList = useSelector((store) => store.categoryReducer);

  useEffect(() => dispatch({ type: 'GET_CATEGORIES' }), []);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    setAnchorEl(null);
  };

  const addCategoryToGif = (clickedText) => {
    // setCategory(clickedText);
    dispatch({
      type: 'PUT_GIF',
      payload: { categoryId: categoryItem.id, id: entry.id },
    });
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_FAV', payload: entry.id });
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const addNewCategory = () => {
    console.log('in addNewCategory');
    dispatch({ type: 'ADD_CATEGORY', payload: newCategoryName });
    setDialogOpen(false);
  };

  useEffect(() => dispatch({ type: 'GET_CATEGORIES' }), []);

  return (
    <>
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
              {categoryList.map((categoryItem) => {
                return (
                  <MenuItem onClick={() => addCategoryToGif(categoryItem.id)}>
                    {categoryItem.name}
                  </MenuItem>
                );
              })}
              <MenuItem onClick={handleDialogOpen}>Add New Category</MenuItem>
            </Menu>
            <IconButton onClick={handleDelete}>
              <DeleteOutline />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
      <Dialog open={dialogOpen} onClose={addNewCategory}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            value={newCategory}
            onChange={(event) => setNewCategory(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={addNewCategory}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FavoritesItem;
