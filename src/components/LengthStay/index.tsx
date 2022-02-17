import React from 'react';
import './length-stay.scss';

interface ILengthStay {
  dateArrivalTitle: string,
  dateArrivalPlaceholder: string,
  dateDepartureTitle: string,
  dateDeparturePlaceholder: string
}

// dateArrivalTitle: 'date Dropdown',
// dateArrivalPlaceholder: 'ДД.ММ.ГГГГ',
// dateDepartureTitle: 'date Dropdown',
// dateDeparturePlaceholder: '19.08.2019',

export const LengthStay: React.FC<{ variables: ILengthStay }> = ({ variables }) => {
  const {
    dateArrivalTitle,
    dateArrivalPlaceholder,
    dateDepartureTitle,
    dateDeparturePlaceholder
  } = variables
  return (
    <div className="length-stay">
      <div className="length-stay__date-arrival">
        <p className="length-stay__arrival-title caption">{dateArrivalTitle}</p>
        <input className="date-arrival__dropdown length-stay__input" placeholder={dateArrivalPlaceholder} name="date-arrival" type="text" />
      </div>
      <div className="length-stay__date-departure">
        <p className="ength-stay__departure-title caption">{dateDepartureTitle}</p>
        <input className="date-departure__dropdown length-stay__input" placeholder={dateDeparturePlaceholder} name="date-departure" type="text" />
      </div>
    </div>
  );
}