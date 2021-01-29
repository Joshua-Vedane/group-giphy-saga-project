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
<<<<<<< HEAD
  const categoryList = useSelector(state => state.categoryReducer)
=======
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const categoryList = useSelector((store) => store.categoryReducer);

  useEffect(() => dispatch({ type: 'GET_CATEGORIES' }), []);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    setAnchorEl(null);
  };
>>>>>>> 66702f8d73c442fe6e2b8b5fe648a9e11b6ea7df

  const addCategoryToGif = (categoryId) => {
    
    // setCategory(clickedText);
<<<<<<< HEAD
    dispatch({type: 'PUT_GIF', payload: {categoryId: categoryId, id: entry.id} })

=======
    dispatch({
      type: 'PUT_GIF',
      payload: { categoryId: categoryItem.id, id: entry.id },
    });
>>>>>>> 66702f8d73c442fe6e2b8b5fe648a9e11b6ea7df
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
<<<<<<< HEAD
  
  
=======

  useEffect(() => dispatch({ type: 'GET_CATEGORIES' }), []);
>>>>>>> 66702f8d73c442fe6e2b8b5fe648a9e11b6ea7df

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
<<<<<<< HEAD
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
            <MenuItem onClick={() => addCategoryToGif('')}>
              <em>none</em>
            </MenuItem>
            {/* map over categoryList to display all categories as option items */}
            {/* add Category only sends the id that corresponds to the name of the category in the DB */}
            {categoryList.map((categoryItem) => {
              return(
                <MenuItem onClick={() => addCategoryToGif(categoryItem.id)}>{categoryItem.name}</MenuItem>
              )
            })}

            {/* <MenuItem onClick={() => addCategoryToGif('funny')}>Funny</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('odd')}>Odd</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('cartoon')}>Cartoon</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('spicy')}>Spicy</MenuItem>
            <MenuItem onClick={() => addCategoryToGif('meme')}>Meme</MenuItem> */}
          </Menu>
          <IconButton onClick={handleDelete}>
            <DeleteOutline />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
=======
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
>>>>>>> 66702f8d73c442fe6e2b8b5fe648a9e11b6ea7df
  );
}

export default FavoritesItem;
