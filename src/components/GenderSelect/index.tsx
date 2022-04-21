import React from 'react';
import './gender-select.scss';

export default class GenderSelect extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="gender-select" >
        <div className="gender-select__btns">
          <div className="gender-select__btns-gender">
            <input
              id="gender-select__man"
              className="gender-select__input"
              type="radio"
              name="gender"
              value="man"
              defaultChecked />
            <label
              className="gender-select__label"
              htmlFor="gender-select__man"></label>
            <p>Мужчина</p>
          </div>
          <div className="gender-select__btns-gender">
            <input
              id="gender-select__female"
              className="gender-select__input"
              type="radio"
              name="gender"
              value="female" />
            <label
              className="gender-select__label"
              htmlFor="gender-select__female"></label>
            <p>Женщина</p>
          </div>
        </div>
      </div>
    )
  }
}