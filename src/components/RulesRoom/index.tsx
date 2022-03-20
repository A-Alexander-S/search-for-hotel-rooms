import React from "react";
import "./rules-room.scss";

interface IRulesRoomProps {
  options: {
    title: string
  }
}
export default class RulesRoom extends React.Component<IRulesRoomProps> {
  render(): React.ReactNode {
    return (
      <div className="rules-room">
        <p className="rules-room__caption">{this.props.options.title}</p>
        <ul className="rules-room__list">
          <li className="rules-room__list-item">
            <input id="smoke" className="rules-room__checkbox" name="smoke" type="checkbox" />
            <label className="rules-room__label" htmlFor="smoke">
              <p className="rules-room__text">Можно курить</p>
            </label>
          </li>
          <li className="rules-room__list-item">
            <input id="pets" className="rules-room__checkbox" name="pets" type="checkbox" />
            <label className="rules-room__label" htmlFor="pets">
              <p className="rules-room__text">Можно с питомцами</p>
            </label>
          </li>
          <li className="rules-room__list-item">
            <input id="guests" className="rules-room__checkbox" name="guests" type="checkbox" />
            <label className="rules-room__label" htmlFor="guests">
              <p className="rules-room__text">Можно пригласить гостей (до 10 человек)</p>
            </label>
          </li>
        </ul>
      </div>
    )
  }
}