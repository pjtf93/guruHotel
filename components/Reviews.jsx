import React from 'react';

const Reviews = ({ data }) => {
  return data.reviews.map((x) => {
    return (
      <div style={{ margin: '20px' }}>
        <span>{x.text}</span>
      </div>
    );
  });
};

export default Reviews;
