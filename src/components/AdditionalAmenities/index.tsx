import React from "react";
import "./additional-amenities.scss";

interface IAdditionalAmenities {
  IsActive: boolean,
  classesHandlerButton: string
}

export default class AdditionalAmenities extends React.Component {

  state: IAdditionalAmenities = {
    IsActive: false,
    classesHandlerButton: "additional-amenities__button"
  }

  /**
   * Handler click button.
   * Change classes button(from active to inactive and vice versa).
   * Changing the variable IsActive that affects the conditional rendering of the picture arrow
  */
  handlerButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.classesHandlerButton === "additional-amenities__button") {
      this.setState({
        classesHandlerButton: "additional-amenities__button additional-amenities__button-active"
      })
    } else {
      this.setState({
        classesHandlerButton: "additional-amenities__button"
      })
    }
    this.setState({ IsActive: !this.state.IsActive })
  }

  render(): React.ReactNode {
    return (
      <div className="additional-amenities">
        <button
          className={this.state.classesHandlerButton}
          onClick={this.handlerButton}>
          <p className="additional-amenities__caption">
            expandable checkbox list
          </p>
          {this.state.IsActive ?
            <svg className="additional-amenities__arrow-top" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.40625 7.42187L1.74709e-06 6.01562L6 0.0156231L12 6.01562L10.5938 7.42187L6 2.82812L1.40625 7.42187Z" fill="#1F2041" fill-opacity="0.5" />
            </svg> :
            <svg
              className="additional-amenities__arrow-down"
              width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z" fill="#1F2041" fillOpacity="0.75" />
            </svg>}
        </button>
        <ul className="additional-amenities__list">
          <li className="additional-amenities__list-item">
            <input id="breakfast" className="additional-amenities__checkbox" name="breakfast" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="breakfast">
              <p className="additional-amenities__label-text">Завтрак</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="desk" className="additional-amenities__checkbox" name="desk" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="desk">
              <p className="additional-amenities__label-text">Письменный стол</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="feading-chair" className="additional-amenities__checkbox" name="feading-chair" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="feading-chair">
              <p className="additional-amenities__label-text">Стул для кормления</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="crib" className="additional-amenities__checkbox" name="crib" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="crib">
              <p className="additional-amenities__label-text">Кроватка</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="television" className="additional-amenities__checkbox" name="television" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="television">
              <p className="additional-amenities__label-text">Телевизор</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="shampoo" className="additional-amenities__checkbox" name="shampoo" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="shampoo">
              <p className="additional-amenities__label-text">Шампунь</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="conditioner" className="additional-amenities__checkbox" name="conditioner" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="conditioner">
              <p className="additional-amenities__label-text">Кондиционер</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="jacuzzi" className="additional-amenities__checkbox" name="jacuzzi" type="checkbox" />
            <label className="additional-amenities__label" htmlFor="jacuzzi">
              <p className="additional-amenities__label-text">Джакузи</p>
            </label>
          </li>
        </ul>
      </div>
    )
  }
}