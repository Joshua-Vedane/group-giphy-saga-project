import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeleteOutline } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 110,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FavoritesItem({ entry }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(entry.image_url);
  const [category, setCategory] = useState('');

  const handleCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };
  
  const handleDelete = () => {
    console.log('clicked handleDelete');
    dispatch({ type: 'DELETE_FAV', payload: entry.id });
  };

  return (
    <Card elevation={4}>
      <CardActionArea>
        <Box p={2}>
          <img src={entry.image_url} />
        </Box>
      </CardActionArea>
      <CardContent>
        <Typography variant="h6" align="center">
          {category}
        </Typography>
      </CardContent>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardActions>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="categoryLabel">Category</InputLabel>
            <Select
              value={category}
              labelId="categoryLabel"
              onChange={handleCategory}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="funny">Funny</MenuItem>
              <MenuItem value="odd">Odd</MenuItem>
              <MenuItem value="cartoon">Cartoon</MenuItem>
              <MenuItem value="spicy">Spicy</MenuItem>
              <MenuItem value="meme">Meme</MenuItem>
            </Select>
          </FormControl>
          <IconButton onClick={handleDelete}>
            <DeleteOutline />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default FavoritesItem;
