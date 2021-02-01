import React from 'react';

const Reviews = ({ data }) => {
  return (
    <div className="item-reviews-boxs">
      <h3>Reviews</h3>
      {data.map((x) => {
        return (
          <div className="item-review" key={x.id}>
            <div className="item-review-user">
              {x?.user?.image_url !== null ? (
                <img src={`${x?.user?.image_url}`} />
              ) : null}
              <div className="item-review-user-info">
                <p>{x.user.name}</p>
                <span>{x.rating} stars </span>
              </div>
              <span className="item-review-user-date">
                {x.time_created.slice(0, 10)}
              </span>
            </div>

            <span>{x.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
