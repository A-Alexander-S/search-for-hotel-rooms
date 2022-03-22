import React from "react";
import "./accessibility.scss";

export default class Accessibility extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="accessibility">
        <p className="accessibility__caption">rich Checkbox Buttons</p>
        <ul className="accessibility__list">
          <li className="accessibility__item">
            <input id="wide-corridor" className="accessibility__checkbox" type="checkbox" name="wide-corridor" />
            <label className="accessibility__label" htmlFor="wide-corridor">
              <div className="accessibility__label-desc">
                <p className="accessibility__label-subtitle">Широкий коридор</p>
                <p className="accessibility__label-text">Ширина коридоров в номере не менее 91 см.</p>
              </div>
            </label>
          </li>
          <li className="accessibility__item">
            <input id="assistant-for-disabled" className="accessibility__checkbox" type="checkbox" name="assistant-for-disabled" />
            <label className="accessibility__label" htmlFor="assistant-for-disabled">
              <div className="accessibility__label-desc">
                <p className="accessibility__label-subtitle">Помощник для инвалидов</p>
                <p className="accessibility__label-text">На 1 этаже вас встретит специалист  и проводит до номера.</p>
              </div>
            </label>
          </li>
        </ul>
      </div>
    )
  }
}