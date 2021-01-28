import { useSelector } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem';
import { Grid } from '@material-ui/core';

function SearchList() {
  // useSelector to get reducer in index.js
  const searchResults = useSelector((state) => state.searchReducer);

  return (
    <Grid container spacing={4} justify="center">
      {searchResults.map((entry) => {
        return (
          <Grid key={entry.id} item>
            <SearchItem entry={entry} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SearchList;
