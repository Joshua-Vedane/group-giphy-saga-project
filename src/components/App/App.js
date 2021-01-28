import React from 'react';
import { Box, Typography } from '@material-ui/core';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';

function App() {
  return (
    <>
      <Box>
        <Typography>Giphy Search!</Typography>
      </Box>
      <SearchForm />
      <SearchList />
      <FavoritesList />
    </>
  );
}

export default App;
