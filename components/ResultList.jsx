import { useState } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';

const ResultList = ({ data }) => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ul style={{ width: '50%' }}>
          {data?.map((x) => {
            return (
              <li
                key={x.id}
                style={{ listStyleType: 'none' }}
                onClick={() => setSelected(x.id)}
              >
                <Item data={x} />
              </li>
            );
          })}
        </ul>
        <div style={{ width: '50%' }}>
          <h1>Selected item</h1>
          {selected ? <ItemDetails id={selected} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ResultList;
