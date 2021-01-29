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

  const addCategoryToGif = (categoryId) => {
    dispatch({
      type: 'PUT_GIF',
      payload: { categoryId: categoryId, id: entry.id },
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
    dispatch({ type: 'POST_CATEGORY', payload: newCategory });
    setDialogOpen(false);
  };

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
              {entry.name}
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
              <MenuItem onClick={() => addCategoryToGif(null)}>
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
        <Box display="flex" justifyContent="center">
          <DialogActions>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button color="primary" variant="outlined" onClick={addNewCategory}>
              Add
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default FavoritesItem;
