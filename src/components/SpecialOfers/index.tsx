import React from "react";
import "./special-ofers.scss";

export default class SpecialOfers extends React.Component {

  render(): React.ReactNode {
    return (
      <div className="special-ofers">
        <div className="special-ofers__toggle">
          <input
            id="special-ofers__input"
            className="special-ofers__input"
            type="checkbox"
            name="special-ofers"
            value="yes"
          />
          <label
            className="special-ofers__toggle-toggle"
            htmlFor="special-ofers__input"></label>
          <p className="special-ofers__desc"> Получать спецпредложения</p>
        </div>
      </div>
    )
  }
}