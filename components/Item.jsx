import Image from 'next/image';

const Item = ({ data, index, recently }) => {
  return (
    <div className="item-container">
      <div className={recently ? 'item-box-image-recently' : 'item-box-image'}>
        <Image
          key={data.id}
          src={`${data.photos[0]}`}
          height={250}
          width={recently ? 300 : 600}
          alt={data?.name}
        />
      </div>
      <div className={recently ? 'item-box-recently' : 'item-box'}>
        {index ? (
          <h1>
            {index + 1}. {data?.name}
          </h1>
        ) : (
          <div>
            <h1>{data?.name}</h1>
          </div>
        )}
        {data.viewed && recently ? <span>👁</span> : null}
        <span>
          {data?.rating} stars | {data?.review_count} Reviews
        </span>

        <span> </span>
        <span>Phone: {data?.display_phone}</span>
        <span>{data?.location.formatted_address}</span>
      </div>
    </div>
  );
};

export default Item;
