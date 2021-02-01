import React from 'react';

const Hours = ({ data }) => {
  const addColon = (string) => string.replace(/\b(\d{1,2})(\d{2})/g, '$1:$2');

  const numberToDay = (number) => {
    if (number === 0) {
      return 'Mon';
    } else if (number === 1) {
      return 'Tue';
    } else if (number === 2) {
      return 'Wed';
    } else if (number === 3) {
      return 'Thu';
    } else if (number === 4) {
      return 'Fri';
    } else if (number === 5) {
      return 'Sat';
    } else {
      return 'Sun';
    }
  };
  return (
    <>
      <div className="item-hours-container">
        <h3>Schedule</h3>
        <div className="item-hours-box">
          {data?.map((x) => {
            return (
              <div className="item-hours-details">
                <p>{numberToDay(x.day)}</p>
                <p>{addColon(x.start)}</p>
                <p>{addColon(x.end)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hours;
