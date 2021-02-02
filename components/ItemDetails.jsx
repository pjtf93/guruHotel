import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hours from './Hours';
import Reviews from './Reviews';
import { useSelector } from 'react-redux';
import { selectedItemById } from '../features/items/itemsSlice';

const ItemDetails = ({ id, key, setSelected }) => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const data = useSelector((state) => selectedItemById(state, id));

  return (
    <>
      {data && (
        <div key={key} className="item-details-box">
          <button className="item-close" onClick={() => setSelected(null)}>
            Close
          </button>
          <div className="item-details-image">
            <Image
              key={data.id}
              src={`${data.photos[0]}`}
              height={425}
              width={800}
            />
          </div>
          <div>
            <h1>{data?.name}</h1>
            <div className="item-details-contact">
              <div className="item-details-rating">
                <span>{data?.rating} stars |</span>
                <span> {data?.review_count} Reviews </span>
              </div>
              <span>Address: {data?.location.formatted_address}</span>
            </div>
            <div className="item-details-contact">
              {data.is_closed ? (
                <span className="item-details-closed">Closed Now</span>
              ) : (
                <span className="item-details-open">Open Now</span>
              )}
              <span>Phone: {data?.display_phone}</span>
            </div>
          </div>
          <span className="item-details-price">Price: {data?.price}</span>
          <Hours data={data?.hours[0]?.open} />
          <Reviews data={data.reviews} />
        </div>
      )}
    </>
  );
};

export default ItemDetails;
