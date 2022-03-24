import React from "react";
import "./bullet-list.scss";

interface IBulletListProps {
  options: {
    pets?: boolean,
    events?: boolean,
    timeArrivalAndDeparture?: boolean,
  }
}

export default class BulletList extends React.Component<IBulletListProps> {
  state = {
    pets: this.props.options.pets,
    events: this.props.options.events,
    timeArrivalAndDeparture: this.props.options.timeArrivalAndDeparture,
  }
  render(): React.ReactNode {
    return (
      <div className="bullet-list">
        <p className="bullet-list__caption">bullet list</p>
        <ul className="bullet-list__list">
          {this.state.pets &&
            <li className="bullet-list__list-item">
              <span className="bullet-list__text">Нельзя с питомцами</span>
            </li>}
          {this.state.events &&
            <li className="bullet-list__list-item">
              <span className="bullet-list__text">Без вечеринок и мероприятий</span>
            </li>}
          {this.state.timeArrivalAndDeparture &&
            <li className="bullet-list__list-item">
              <span className="bullet-list__text">Время прибытия — после 13:00,
                а выезд до 12:00</span>
            </li>}
        </ul>
      </div>
    )
  }
}