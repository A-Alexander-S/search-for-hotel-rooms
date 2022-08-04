import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  additionalAmenitiesAction,
  additionalAmenitiesType
} from "../../actions/filterRoomsActions";
import "./additional-amenities.scss";

interface IAdditionalAmenitiesProps {
  options: {
    title: string
  },
  desktop: boolean,
  crib: boolean,
  television: boolean,
  airConditioner: boolean,
  additionalAmenitiesAction: (
    desktop: boolean,
    crib: boolean,
    television: boolean,
    airConditioner: boolean
  ) => additionalAmenitiesType
}

interface IAdditionalAmenitiesState {
  IsActive: boolean,
  classesHandlerButton: string
}

class AdditionalAmenities extends React.Component<
  IAdditionalAmenitiesProps,
  IAdditionalAmenitiesState
> {

  state: IAdditionalAmenitiesState = {
    IsActive: false,
    classesHandlerButton: "additional-amenities__button"
  }

  /**
   * Handler click button.
   * Change classes button(from active to inactive and vice versa).
   * Changing the variable IsActive that affects the conditional rendering of the picture arrow
  */
  handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  handleClickCheckbox = (e: React.MouseEvent<HTMLLabelElement>) => {
    const { desktop, crib, television, airConditioner, additionalAmenitiesAction } = this.props;
    if (e.currentTarget.hasAttribute('data-desktop')) {
      additionalAmenitiesAction(!desktop, crib, television, airConditioner);
    }
    if (e.currentTarget.hasAttribute('data-crib')) {
      additionalAmenitiesAction(desktop, !crib, television, airConditioner);
    }
    if (e.currentTarget.hasAttribute('data-television')) {
      additionalAmenitiesAction(desktop, crib, !television, airConditioner);
    }
    if (e.currentTarget.hasAttribute('data-airConditioner')) {
      additionalAmenitiesAction(desktop, crib, television, !airConditioner);
    }
  }

  render(): React.ReactNode {
    const { title } = this.props.options;
    return (
      <div className="additional-amenities">
        <button
          className={this.state.classesHandlerButton}
          onClick={this.handleButton}>
          <p className="additional-amenities__caption">
            {title}
          </p>
          {this.state.IsActive ?
            <svg className="additional-amenities__arrow-top" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.40625 7.42187L1.74709e-06 6.01562L6 0.0156231L12 6.01562L10.5938 7.42187L6 2.82812L1.40625 7.42187Z" fill="#1F2041" fillOpacity="0.5" />
            </svg> :
            <svg
              className="additional-amenities__arrow-down"
              width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z" fill="#1F2041" fillOpacity="0.75" />
            </svg>}
        </button>
        <ul className="additional-amenities__list">
          <li className="additional-amenities__list-item">
            <input id="desk" className="additional-amenities__checkbox" name="desk" type="checkbox" />
            <label
              className="additional-amenities__label"
              data-desktop
              htmlFor="desk"
              onClick={this.handleClickCheckbox}
            >
              <p className="additional-amenities__label-text">Письменный стол</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="crib" className="additional-amenities__checkbox" name="crib" type="checkbox" />
            <label
              className="additional-amenities__label"
              data-crib
              htmlFor="crib"
              onClick={this.handleClickCheckbox}
            >
              <p className="additional-amenities__label-text">Кроватка</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="television" className="additional-amenities__checkbox" name="television" type="checkbox" />
            <label
              className="additional-amenities__label"
              data-television
              htmlFor="television"
              onClick={this.handleClickCheckbox}
            >
              <p className="additional-amenities__label-text">Телевизор</p>
            </label>
          </li>
          <li className="additional-amenities__list-item">
            <input id="conditioner" className="additional-amenities__checkbox" name="conditioner" type="checkbox" />
            <label
              className="additional-amenities__label"
              data-airconditioner
              htmlFor="conditioner"
              onClick={this.handleClickCheckbox}
            >
              <p className="additional-amenities__label-text">Кондиционер</p>
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  desktop: store.filteredRoomsReducer.desktop,
  crib: store.filteredRoomsReducer.crib,
  television: store.filteredRoomsReducer.television,
  airConditioner: store.filteredRoomsReducer.airConditioner
});

const mapDispatchToProps = dispatch => bindActionCreators({
  additionalAmenitiesAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalAmenities);