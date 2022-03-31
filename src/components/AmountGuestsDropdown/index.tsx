import React, { MouseEvent } from "react";
import Button from "../Button/index";
import "./amount-guests-dropdown.scss";

interface IAmountGuestsDropdown {
  classesButton: string,
  totalNumberOfGuests: number,
  quantityAdults: number,
  quantityChildren: number,
  quantityBabies: number
}

export default class AmountGuestsDropdown extends React.Component {
  state: IAmountGuestsDropdown = {
    classesButton: "amount-guests-dropdown__button",
    totalNumberOfGuests: 0,
    quantityAdults: 0,
    quantityChildren: 0,
    quantityBabies: 0,
  }

  constructor(props) {
    super(props);
    this.handleClickClearButton = this.handleClickClearButton.bind(this);
  }

  /**
   * method handler hat(button) dropdown
  */
  handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.classesButton === "amount-guests-dropdown__button") {
      this.setState({
        classesButton: "amount-guests-dropdown__button amount-guests-dropdown-activ"
      })
    } else {
      this.setState({
        classesButton: "amount-guests-dropdown__button"
      })
    }
  }

  renderTotalNumberOfGuests = () => {
    return (
      <span>
        {this.state.totalNumberOfGuests} {this.state.totalNumberOfGuests === 1 ? "гость" :
          this.state.totalNumberOfGuests <= 4 ? "гостя" :
            this.state.totalNumberOfGuests <= 20 ? "гостей" :
              "гостей"
        }
      </span>
    )
  }

  /**
   * method handler event picture,that decrease and increase 
   * amount guest certain age in state
  */
  handleClickChangeQuantityGuests = (e: React.MouseEvent<Element>) => {
    // const target = e.target as Element;
    if (e.currentTarget.classList.contains("decrease-adults") && this.state.quantityAdults !== 0) {
      this.setState((state: IAmountGuestsDropdown) => ({
        quantityAdults: state.quantityAdults - 1,
        totalNumberOfGuests: state.totalNumberOfGuests - 1
      }))
    } else if (e.currentTarget.classList.contains("increase-adults")) {
      this.setState((state: IAmountGuestsDropdown) => ({
        quantityAdults: state.quantityAdults + 1,
        totalNumberOfGuests: state.totalNumberOfGuests + 1
      }))
    } else if (e.currentTarget.classList.contains("decrease-children") && this.state.quantityChildren !== 0) {
      this.setState((state: IAmountGuestsDropdown) => ({
        quantityChildren: state.quantityChildren - 1,
        totalNumberOfGuests: state.totalNumberOfGuests - 1
      }))
    } else if (e.currentTarget.classList.contains("increase-children")) {
      this.setState((state: IAmountGuestsDropdown) => ({
        quantityChildren: state.quantityChildren + 1,
        totalNumberOfGuests: state.totalNumberOfGuests + 1
      }))
    } else if (e.currentTarget.classList.contains("decrease-babies") && this.state.quantityBabies !== 0) {
      this.setState((state: IAmountGuestsDropdown) => ({
        quantityBabies: state.quantityBabies - 1,
        totalNumberOfGuests: state.totalNumberOfGuests - 1
      }))
    } else if (e.currentTarget.classList.contains("increase-babies")) {
      this.setState((state: IAmountGuestsDropdown) => ({
        quantityBabies: state.quantityBabies + 1,
        totalNumberOfGuests: state.totalNumberOfGuests + 1
      }))
    }
  }

  /**
   * method renders active picture
  */
  renderPicIncreaseDecreaseGuests = (classPic: string) => {
    let classSvg = `amount-guests-dropdown__pic ${classPic}`;

    const stateCountGuests = classPic.endsWith("adults") ? "quantityAdults" :
      classPic.endsWith("children") ? "quantityChildren" :
        classPic.endsWith("babies") ? "quantityBabies" : "";

    return (classPic.startsWith("decrease") ?
      <svg
        className={classSvg}
        width="30" height="31" viewBox="0 0 30 31" fill="none"
        onClick={this.handleClickChangeQuantityGuests}>
        <g opacity={this.state[stateCountGuests] > 0 ? "1" : "0.38"}>
          <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
          <path d="M12.6435 16.1216H17.3595V17.2376H12.6435V16.1216Z" fill="#1F2041" fillOpacity="0.5" />
        </g>
      </svg>
      : <svg
        className={classSvg}
        width="30" height="31" viewBox="0 0 30 31" fill="none"
        onClick={this.handleClickChangeQuantityGuests}>
        <g opacity={this.state[stateCountGuests] > 0 ? "1" : "0.38"}>
          <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
          <path d="M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z" fill="#1F2041" fillOpacity="0.5" />
        </g>
      </svg>
    )
  }

  handleClickClearButton = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      totalNumberOfGuests: 0,
      quantityAdults: 0,
      quantityChildren: 0,
      quantityBabies: 0,
    })
  }

  render(): React.ReactNode {
    return (
      <div className="amount-guests-dropdown">
        <button
          className={this.state.classesButton}
          onClick={this.handleButton}>
          {this.state.totalNumberOfGuests > 0 ? this.renderTotalNumberOfGuests() : "Сколько гостей"}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z" fill="#1F2041" fillOpacity="0.75" />
          </svg>
        </button>
        <ul
          className="amount-guests-dropdown__list">
          <li className="amount-guests-dropdown__list-item">
            <span>взрослые</span>
            <div className="amount-guests-dropdown__change-quantity">
              {this.renderPicIncreaseDecreaseGuests("decrease-adults")}
              <span className="amount-guests-dropdown__list-quantity amount-guests-dropdown__quantity-adults">
                {this.state.quantityAdults}
              </span>
              {this.renderPicIncreaseDecreaseGuests("increase-adults")}
            </div>
          </li>
          <li className="amount-guests-dropdown__list-item">
            <span>дети</span>
            <div className="amount-guests-dropdown__change-quantity">
              {this.renderPicIncreaseDecreaseGuests("decrease-children")}
              <span className="amount-guests-dropdown__list-quantity amount-guests-dropdown__quantity-children">
                {this.state.quantityChildren}
              </span>
              {this.renderPicIncreaseDecreaseGuests("increase-children")}
            </div>
          </li>
          <li className="amount-guests-dropdown__list-item">
            <span>младенцы</span>
            <div className="amount-guests-dropdown__change-quantity">
              {this.renderPicIncreaseDecreaseGuests("decrease-babies")}
              <span className="amount-guests-dropdown__list-quantity amount-guests-dropdown__quantity-babies">
                {this.state.quantityBabies}
              </span>
              {this.renderPicIncreaseDecreaseGuests("increase-babies")}
            </div>
          </li>
          <li className="amount-guests-dropdown__button-apply"
            style={this.state.totalNumberOfGuests > 0 ? { justifyContent: "space-between" } :
              { justifyContent: "flex-end" }}>
            {(this.state.totalNumberOfGuests > 0) &&
              <Button
                options={{ classButton: "button-text", text: "очистить" }}
                onClick={this.handleClickClearButton}
              />}
            <Button
              options={{ classButton: "button-text", text: "применить" }} />
          </li>
        </ul>
      </div>
    )
  }
}