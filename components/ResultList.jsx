import { useState } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllItems, setViewItem } from '../features/items/itemsSlice';

const ResultList = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const data = useSelector(selectAllItems);

  const selectedItem = (id) => {
    dispatch(setViewItem({ id }));
    setSelected(id);
  };

  return (
    <>
      {data.length === 0 ? (
        <>
          <div className="warning-message">
            <h1>Sorry but no data was found. Can you back and try again?</h1>
          </div>
        </>
      ) : (
        <div className="result-list-container">
          <ul className="result-list-box">
            {data?.map((x, i) => {
              return (
                <li key={x.id} onClick={() => selectedItem(x.id)}>
                  <Item data={x} index={i} />
                </li>
              );
            })}
          </ul>
          {selected ? (
            <div
              className="result-details"
              style={{ display: selected ? 'flex' : 'none' }}
            >
              <ItemDetails
                id={selected}
                data={data}
                key={data.id}
                setSelected={setSelected}
              />
            </div>
          ) : (
            <div className="result-details-message">
              <p>Select an item if you would like to know more about it</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ResultList;
