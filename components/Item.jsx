import { useState } from 'react';

const Item = ({ data }) => {
  const tipo = data.rating;
  const star = '⭐️';

  return (
    <div>
      <img
        src={data.photos[0]}
        style={{
          maxWidth: '100px',
          objectFit: 'cover',
          height: '50px',
          width: '100%',
        }}
      />
      <h1>{data.name}</h1>
      <span>
        {data.rating} {star}
      </span>
      {/* <span>{star.repeat(data.rating)} Stars </span> */}
      <span>{data.review_count} Reviews </span>
      <span>{data.display_phone}</span>
      <span>
        {data.location.address1} {data.location.city}, {data.location.state}{' '}
      </span>
    </div>
  );
};

export default Item;
