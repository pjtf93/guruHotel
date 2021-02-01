import { useState, useEffect } from 'react';
import Image from 'next/image';

import Hours from './Hours';
import Reviews from './Reviews';

const ItemDetails = ({ id, data, key }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItem = (id) => {
    const item = data.filter((x) => {
      return x.id.includes(id);
    });
    setSelectedItem(item[0]);
  };

  useEffect(() => {
    filterItem(id);
  }, [id]);

  return (
    <>
      {selectedItem && (
        <div key={key} className="item-details-box">
          {/* <img src={`${selectedItem?.photos[0]}`} alt={data?.name} /> */}
          <div className="item-details-image">
            <Image
              key={selectedItem.id}
              src={`${selectedItem.photos[0]}`}
              height={425}
              width={800}
            />
          </div>

          <div>
            <h1>{selectedItem?.name}</h1>
            <div className="item-details-contact">
              <div>
                <span>{selectedItem?.rating} stars |</span>
                <span> {selectedItem?.review_count} Reviews </span>
              </div>
              <span>Address: {selectedItem?.location.formatted_address}</span>
            </div>
            <div className="item-details-contact">
              {selectedItem.is_closed ? (
                <span className="item-details-closed">Closed Now'</span>
              ) : (
                <span className="item-details-open">Open Now</span>
              )}
              <span>Phone: {selectedItem?.display_phone}</span>
            </div>
          </div>
          <span className="item-details-price">
            Price: {selectedItem?.price}
          </span>

          <Hours data={selectedItem?.hours[0]?.open} />
          <Reviews data={selectedItem.reviews} />
        </div>
      )}
    </>
  );
};

export default ItemDetails;
