import { useState } from 'react';
import Image from 'next/image';

const Item = ({ data, index }) => {
  const tipo = data.rating;
  const star = '⭐️';

  return (
    <div className="item-container">
      <div className="item-box-image">
        <Image
          key={data.id}
          src={`${data.photos[0]}`}
          height={250}
          width={600}
          alt={data?.name}
        />
        {/* <img src={`${data?.photos[0]}`} alt={data?.name} /> */}
      </div>
      <div className="item-box">
        <h1>
          {index + 1}. {data?.name}
        </h1>
        <span>
          {data?.rating} stars | {data?.review_count} Reviews
        </span>
        {/* <span>{star.repeat(data.rating)} Stars </span> */}
        <span> </span>
        <span>Phone: {data?.display_phone}</span>
        <span>{data?.location.formatted_address}</span>
      </div>
    </div>
  );
};

export default Item;
