import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, Typography, TextField, Button, Divider } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function SearchForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    console.log('clicked');
    dispatch({ type: 'POST_SEARCH', payload: search });
    setSearch('');
    history.push('/search');
  };

  return (
    <>
      <Box p={3}>
        <form onSubmit={submitSearch}>
          <Box display="flex" alignItems="center">
            <Box marginRight={2} width="30%">
              <Typography variant="h4" align="right">
                Giphy Search!
              </Typography>
            </Box>
            <Box mx={2} width="50%">
              <TextField
                fullWidth={true}
                label="Search Giphy"
                variant="outlined"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </Box>
            <Box mx={2} width="20%">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<ArrowForward />}
              >
                Search
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box marginBottom={4}>
        <Divider />
      </Box>
    </>
  );
}

export default SearchForm;
