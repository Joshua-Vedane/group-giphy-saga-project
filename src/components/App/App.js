import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';

function App() {
  return (
    <>
      <Box>
        <Typography>Giphy Search!</Typography>
      </Box>
      <Container maxWidth="md">
        <SearchForm />
        <SearchList />
        <FavoritesList />
      </Container>
    </>
  );
}

export default App;
