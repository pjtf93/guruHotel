import { useState } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllItems, setViewItem } from '../features/items/itemsSlice';

const ResultList = ({ data }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const datos = useSelector(selectAllItems);

  const selectedItem = (id) => {
    dispatch(setViewItem({ id }));
    setSelected(id);
  };

  return (
    <>
      <div className="result-list-container">
        <ul className="result-list-box">
          {datos?.map((x, i) => {
            return (
              <li key={x.id} onClick={() => selectedItem(x.id)}>
                <Item data={x} index={i} />
              </li>
            );
          })}
        </ul>
        <div className="result-details">
          {selected ? (
            <ItemDetails id={selected} data={data} key={data.id} />
          ) : (
            <div>
              <p>Select an item if you would like to know more about it</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResultList;
