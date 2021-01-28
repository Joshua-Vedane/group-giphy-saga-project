import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
      <Container maxWidth="md">
        <Route path="/" component={SearchForm} />
        <Route path="/search" component={SearchList} />
        <Route path="/favorites" component={FavoritesList} />
      </Container>
    </Router>
  );
}

export default App;
