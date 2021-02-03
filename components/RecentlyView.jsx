import { useSelector } from 'react-redux';
import { selectAllItems } from '../features/items/itemsSlice';
import Item from './Item';

const RecentlyView = () => {
  const data = useSelector(selectAllItems);

  return (
    <div className="recently-viewed-container">
      <div>
        <h1>Recently searched</h1>
      </div>
      <div className="recently-viewed-box">
        {data?.map((x) => {
          return (
            <div key={x.id} className="recently-viewed-item">
              <Item data={x} recently />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyView;
