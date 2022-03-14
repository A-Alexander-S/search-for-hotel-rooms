import React from "react";
import "./amount-rooms-dropdown.scss";

interface IAmountRoomsDropdownState {
  classesAmountRoomsDropdownList: string,
}

interface IState {
  numberOfBedrooms: number,
  numberOfBeds: number,
  numberOfBathrooms: number,
  classesAmountRoomsDropdownList: string
}

export default class AmountRoomsDropdown extends React.Component {
  private amountRoomsDropdownButtonRef: React.RefObject<HTMLButtonElement>
  state = {
    numberOfBedrooms: 1,
    numberOfBeds: 1,
    numberOfBathrooms: 1,
    classesAmountRoomsDropdownList: "amount-rooms-dropdown__list ",
  }

  constructor(props) {
    super(props);
    this.amountRoomsDropdownButtonRef = React.createRef();
  }

  handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {

    const amountRoomsDropdown = e.currentTarget.closest(".amount-rooms-dropdown");

    const amountRoomsDropdownButton: HTMLElement =
      amountRoomsDropdown.querySelector(".amount-rooms-dropdown__button");

    const amountRoomsDropdownList: HTMLElement =
      amountRoomsDropdown.querySelector(".amount-rooms-dropdown__list");

    if (!amountRoomsDropdownList.classList.contains("amount-rooms-dropdown__list-activ")) {
      this.setState({ classesAmountRoomsDropdownList: "amount-rooms-dropdown__list amount-rooms-dropdown__list-activ" })
      amountRoomsDropdownButton.style.border = "1px solid rgba(31, 32, 65, 0.5)";
    } else {
      this.setState({ classesAmountRoomsDropdownList: "amount-rooms-dropdown__list" });
      amountRoomsDropdownButton.style.border = "1px solid rgba(31, 32, 65, 0.25)";
    }
  }

  handleClickChangeQuantityBedrooms = (e: React.MouseEvent<SVGSVGElement>) => {

    if (e.currentTarget.classList[1] === "amount-rooms-dropdown__pic-minus-bedrooms" && this.state.numberOfBedrooms !== 0) {
      this.setState((state: IState) => ({
        numberOfBedrooms: state.numberOfBedrooms - 1
      }))
    } else if (e.currentTarget.classList[1] === "amount-rooms-dropdown__pic-plus-bedrooms") {
      this.setState((state: IState) => ({
        numberOfBedrooms: state.numberOfBedrooms + 1
      }))
    }
  }

  handleClickChangeQuantityBeds = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.currentTarget.classList[1] === "amount-rooms-dropdown__pic-minus-beds" && this.state.numberOfBeds !== 0) {
      this.setState((state: IState) => ({
        numberOfBeds: state.numberOfBeds - 1
      }))
    } else if (e.currentTarget.classList[1] === "amount-rooms-dropdown__pic-plus-beds") {
      this.setState((state: IState) => ({
        numberOfBeds: state.numberOfBeds + 1
      }))
    }
  }

  handleClickChangeQuantityBathrooms = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.currentTarget.classList[1] === "amount-rooms-dropdown__pic-minus-bathrooms" && this.state.numberOfBathrooms !== 0) {
      this.setState((state: IState) => ({
        numberOfBathrooms: state.numberOfBathrooms - 1
      }))
    } else if (e.currentTarget.classList[1] === "amount-rooms-dropdown__pic-plus-bathrooms") {
      this.setState((state: IState) => ({
        numberOfBathrooms: state.numberOfBathrooms + 1
      }))
    }
  }

  render(): React.ReactNode {
    return (
      <div className="amount-rooms-dropdown">
        <div className="caption">dropdown</div>
        <div className="amount-rooms-dropdown__drpdn">
          <button
            className="amount-rooms-dropdown__button"
            onClick={this.handleClickButton}>
            <div>
              <span>{this.state.numberOfBedrooms} спальни, </span>
              <span>{this.state.numberOfBeds} кровати...</span>
            </div>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z" fill="#1F2041" fillOpacity="0.75" />
            </svg>
          </button>
          <ul className={this.state.classesAmountRoomsDropdownList}>
            <li className="amount-rooms-dropdown__list-item">
              <span className="amount-rooms-dropdown__list-item-subtitle">спальни</span>
              <div className="amount-rooms-dropdown__list-item-change-quantity">
                <svg
                  className="amount-rooms-dropdown__pic amount-rooms-dropdown__pic-minus-bedrooms"
                  onClick={this.handleClickChangeQuantityBedrooms}
                  width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity={this.state.numberOfBedrooms > 0 ? "1" : "0.38"}>
                    <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
                    <path d="M12.6435 16.1216H17.3595V17.2376H12.6435V16.1216Z" fill="#1F2041" fillOpacity="0.5" />
                  </g>
                </svg>
                <span className="amount-rooms-dropdown__list-item-amount mount-bedrooms">{this.state.numberOfBedrooms}</span>
                <svg
                  className="amount-rooms-dropdown__pic amount-rooms-dropdown__pic-plus-bedrooms"
                  onClick={this.handleClickChangeQuantityBedrooms}
                  width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity={this.state.numberOfBedrooms > 0 ? "1" : "0.38"}>
                    <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
                    <path d="M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z" fill="#1F2041" fillOpacity="0.5" />
                  </g>
                </svg>
              </div>
            </li>
            <li className="amount-rooms-dropdown__list-item">
              <span className="amount-rooms-dropdown__list-item-subtitle">кровати</span>
              <div className="amount-rooms-dropdown__list-item-change-quantity">
                <svg
                  className="amount-rooms-dropdown__pic amount-rooms-dropdown__pic-minus-beds"
                  onClick={this.handleClickChangeQuantityBeds}
                  width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity={this.state.numberOfBeds > 0 ? "1" : "0.38"}>
                    <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
                    <path d="M12.6435 16.1216H17.3595V17.2376H12.6435V16.1216Z" fill="#1F2041" fillOpacity="0.5" />
                  </g>
                </svg>
                <span className="amount-rooms-dropdown__list-item-amount">{this.state.numberOfBeds}</span>
                <svg
                  className="amount-rooms-dropdown__pic amount-rooms-dropdown__pic-plus-beds"
                  onClick={this.handleClickChangeQuantityBeds}
                  width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity={this.state.numberOfBeds > 0 ? "1" : "0.38"}>
                    <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
                    <path d="M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z" fill="#1F2041" fillOpacity="0.5" />
                  </g>
                </svg>
              </div>
            </li>
            <li className="amount-rooms-dropdown__list-item">
              <span className="amount-rooms-dropdown__list-item-subtitle">ванные комнаты</span>
              <div className="amount-rooms-dropdown__list-item-change-quantity">
                <svg
                  className="amount-rooms-dropdown__pic amount-rooms-dropdown__pic-minus-bathrooms"
                  onClick={this.handleClickChangeQuantityBathrooms}
                  width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity={this.state.numberOfBathrooms > 0 ? "1" : "0.38"}>
                    <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
                    <path d="M12.6435 16.1216H17.3595V17.2376H12.6435V16.1216Z" fill="#1F2041" fillOpacity="0.5" />
                  </g>
                </svg>
                <span className="amount-rooms-dropdown__list-item-amount">{this.state.numberOfBathrooms}</span>
                <svg
                  className="amount-rooms-dropdown__pic amount-rooms-dropdown__pic-plus-bathrooms"
                  onClick={this.handleClickChangeQuantityBathrooms}
                  width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity={this.state.numberOfBathrooms > 0 ? "1" : "0.38"}>
                    <path d="M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z" stroke="#1F2041" strokeOpacity="0.25" />
                    <path d="M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z" fill="#1F2041" fillOpacity="0.5" />
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}