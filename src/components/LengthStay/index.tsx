import React from 'react';
import './length-stay.scss';

export const LengthStay: React.FC<{}> = (props) => {
  return (
    <div className='length-stay'>
      <div className="date-arrival">
        <p className="date-arrival__title caption"></p>
        <input className='date-arrival__dropdown' name="date-arrival" type="text" />
      </div>
      <div className="date-departure">
        <p className="date-departure__title caption"></p>
        <input className='date-departure__dropdown' name="date-departure" type="text" />
      </div>
    </div>
  );
}