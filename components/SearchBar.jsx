import Router from 'next/router';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();
  const [showNote, setShowNote] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const [findValue, setFindValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  Router.events.on('routeChangeStart', () => {
    setDisableButton(true);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (findValue !== '' && locationValue !== '') {
      router.push({
        pathname: '/search/[query]',
        query: { query: findValue, location: locationValue },
      });
    } else if (locationValue !== '') {
      router.push({
        pathname: '/search/[query]',
        query: { query: locationValue },
      });
      setShowNote(false);
    } else {
      setShowNote(true);
    }
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
            Near
          </label>
          <input
            type="text"
            value={locationValue}
            onChange={handleLocationChange}
            placeholder="Where are you at?"
          />
        </div>
        <button disabled={disableButton} type="submit">
          Search
        </button>
      </form>
      {showNote && <span> Alert: Please fill at least one field</span>}
      {disableButton && (
        <span>
          Looking for {findValue ? findValue : 'activities'} near{' '}
          {locationValue}...
        </span>
      )}
    </div>
  );
};

export default SearchBar;
