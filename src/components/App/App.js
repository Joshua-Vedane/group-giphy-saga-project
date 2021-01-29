import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="lg">
          <Route path="/" component={SearchForm} />
          <Route path="/search" component={SearchList} />
          <Route path="/favorites" component={FavoritesList} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
