import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();

  const [findValue, setFindValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (findValue !== '' && locationValue !== '') {
      router.push({
        pathname: '/search/[query]',
        query: { query: findValue, location: locationValue },
      });
      resetInputField();
    } else if (locationValue !== '') {
      router.push({
        pathname: '/search/[query]',
        query: { query: locationValue },
      });
      resetInputField();
    } else {
      alert('Please fill the location');
    }
  };

  const resetInputField = () => {
    setFindValue('');
    setLocationValue('');
  };

  const handleFindChange = (event) => {
    setFindValue(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationValue(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <h1>Guru Finder</h1>
      <span>Find and review the best places around you</span>
      <form onSubmit={handleSubmit}>
        <div className="search-bar-box">
          <label className="search-bar-label" htmlFor="">
            Find
          </label>
          <input
            type="text"
            value={findValue}
            onChange={handleFindChange}
            placeholder="What are you looking?"
          />
        </div>
        <div className="search-bar-box">
          <label className="search-bar-label search-bar-label-2" htmlFor="">
            Close to
          </label>
          <input
            type="text"
            value={locationValue}
            onChange={handleLocationChange}
            placeholder="Where are you at?"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
