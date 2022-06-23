import React from 'react';
import './length-stay.scss';

interface ILengthStayProps {
  options: {
    dateArrivalTitle: string,
    dateArrivalPlaceholder?: string,
    dateDepartureTitle: string,
    dateDeparturePlaceholder?: string,
    handleChangeInputArrival: Function,
    handleChangeInputDeparture: Function
  }
}

export default class LengthStay extends React.Component<ILengthStayProps> {

  constructor(props: ILengthStayProps) {
    super(props);
  }

  handleChangeInputArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.options.handleChangeInputArrival(e);
  }

  handleChangeInputDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.options.handleChangeInputDeparture(e);
  }

  render(): React.ReactNode {
    const {
      dateArrivalTitle,
      dateArrivalPlaceholder,
      dateDepartureTitle,
      dateDeparturePlaceholder
    } = this.props.options
    return (
      <div className="length-stay">
        <div className="length-stay__date-arrival">
          <p className="length-stay__arrival-title caption">{dateArrivalTitle}</p>
          <input
            className="date-arrival__dropdown length-stay__input"
            placeholder={dateArrivalPlaceholder}
            name="date-arrival"
            type="date"
            onChange={this.handleChangeInputArrival} />
        </div>
        <div className="length-stay__date-departure">
          <p className="ength-stay__departure-title caption">{dateDepartureTitle}</p>
          <input
            className="date-departure__dropdown length-stay__input"
            placeholder={dateDeparturePlaceholder}
            name="date-departure"
            type="date"
            onChange={this.handleChangeInputDeparture} />
        </div>
      </div>
    );
  }
}