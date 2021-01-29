import { useState } from 'react';

const SearchBar = () => {
  return (
    <div>
      <h1>Guru Hotel</h1>
      <form>
        <input placeholder="Find" />
        <input placeholder="Location" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
