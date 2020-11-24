import { Button } from '@material-ui/core';
import { Mic, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Search.css';

const Search = ({ hideButtons = false }) => {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };
  console.log(state);
  return (
    <form className="search">
      <div className="search__input">
        <SearchOutlined className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Filling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={handleSearch}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Filling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;