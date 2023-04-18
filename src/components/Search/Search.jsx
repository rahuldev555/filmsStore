import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { searchMovie } from '../../features/currentGenreOrCategory';

import useStyles from './styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        variant='standard'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
