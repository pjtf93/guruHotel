import { useState, useEffect } from 'react';
import Reviews from './Reviews';

const ItemDetails = ({ id, data }) => {
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
        <div>
          <img
            src={selectedItem.photos[0]}
            style={{
              maxWidth: '1000px',
              objectFit: 'cover',
              height: '500px',
              width: '100%',
            }}
          />
          <h1>{selectedItem.name}</h1>
          <span>{selectedItem.rating}</span>
          {/* <span>{star.repeat(selectedItem.rating)} Stars </span> */}
          <span>{selectedItem.review_count} Reviews </span>
          <span>{selectedItem.display_phone}</span>
          {/* <span>
            {selectedItem.location.address1} {selectedItem.location.city},{' '}
            {selectedItem.location.state}{' '}
          </span> */}
          <span>{selectedItem.location.formatted_address}</span>
          <span>{selectedItem.price}</span>
          <span>{selectedItem.hours.is_open_now}</span>
          {/* <span>{selectedItem.hours.open[0].start}</span> */}
          <Reviews data={selectedItem} />
        </div>
      )}
    </>
  );
};

export default ItemDetails;
