import React from 'react';

const Search = props => (
  <div id="search-bar">
    <form
      onSubmit={e => {
        e.preventDefault();
        props.fetchSearchedItems;
      }}
    >
      <input type="search" name="searchbox" defaultValue="search" size="35" />
    </form>
  </div>
);

export default Search;
