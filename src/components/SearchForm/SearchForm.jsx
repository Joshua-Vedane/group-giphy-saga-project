import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

function SearchForm() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    console.log('clicked');
  };

  return (
    <Box>
      <form onSubmit={submitSearch}>
        <TextField
          label="Search Giphy"
          variant="outlined"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<ArrowForward />}
        >
          Search
        </Button>
      </form>
    </Box>
  );
}

export default SearchForm;
