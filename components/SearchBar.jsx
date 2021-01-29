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
    <div>
      <h1>Guru Hotel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={findValue}
          onChange={handleFindChange}
          placeholder="Find"
        />
        <input
          type="text"
          value={locationValue}
          onChange={handleLocationChange}
          placeholder="Location"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
