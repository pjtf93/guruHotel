import { useState } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';

const ResultList = ({ data }) => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="result-list-container">
        <ul className="result-list-box">
          {data?.map((x, i) => {
            return (
              <li key={x.id} onClick={() => setSelected(x.id)}>
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
