import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeDateArrivalAction,
  changeDateArrivalType,
  changeDateDepartureAction,
  changeDateDepartureType
} from '../../actions/filterRoomsActions';
import './length-stay.scss';

interface ILengthStayProps {
  options: {
    dateArrivalTitle: string,
    dateDepartureTitle: string,
  },
  changeDateArrivalAction: (dateArrival: string) => changeDateArrivalType,
  changeDateDepartureAction: (dateDeparture: string) => changeDateDepartureType,
}

class LengthStay extends React.Component<ILengthStayProps> {

  constructor(props: ILengthStayProps) {
    super(props);
  }

  handleChangeDateArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeDateArrivalAction(e.currentTarget.value);
  }

  handleChangeDateDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeDateDepartureAction(e.currentTarget.value);
  }

  render(): React.ReactNode {
    const {
      dateArrivalTitle,
      dateDepartureTitle,
    } = this.props.options;
    return (
      <div className="length-stay">
        <div className="length-stay__date-arrival">
          <p className="length-stay__arrival-title caption">{dateArrivalTitle}</p>
          <input
            className="date-arrival__dropdown length-stay__input"
            name="date-arrival"
            type="date"
            onChange={this.handleChangeDateArrival} />
        </div>
        <div className="length-stay__date-departure">
          <p className="ength-stay__departure-title caption">{dateDepartureTitle}</p>
          <input
            className="date-departure__dropdown length-stay__input"
            name="date-departure"
            type="date"
            onChange={this.handleChangeDateDeparture} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeDateArrivalAction,
  changeDateDepartureAction
}, dispatch);

export default connect(null, mapDispatchToProps)(LengthStay);