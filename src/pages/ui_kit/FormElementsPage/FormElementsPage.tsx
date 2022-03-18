import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField } from "../../../components/TextField"
import { LengthStay } from "../../../components/LengthStay"
import { PermissionsCheckbox } from "../../../components/PermissionsCheckbox"
import { GenderSelect } from "../../../components/GenderSelect"
import { SpecialOfers } from "../../../components/SpecialOfers"
import { LikeButton } from "../../../components/LikeButton"
import { Rating } from "../../../components/Rating"
import { RangeSlider } from "../../../components/RangeSlider"
import Button from "../../../components/Button"
import { DateFilter } from "../../../components/DateFilter"
import SubscriptionField from "../../../components/SubscriptionField"
import AmountRoomsDropdown from "../../../components/AmountRoomsDropdown"
import AmountGuestsDropdown from "../../../components/AmountGuestsDropdown"
import AdditionalAmenities from "../../../components/AdditionalAmenities"
import RoomDetails from "../../../components/RoomDetails"
import "./form-elements.scss";

export default class FormElementsPage extends Component {

  /**
   *@param {number} timer
   *@return {number} 5
  */
  // timer: NodeJS.Timeout = setTimeout(() => {
  //   this.setState({
  //     text: "New state"
  //   })
  // }, 2000);


  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9989 32.4712C23.2224 32.4712 22.5871 31.8359 22.5871 31.0594C22.5871 25.6241 18.14 21.177 12.7047 21.177C11.9283 21.177 11.293 20.5418 11.293 19.7653C11.293 18.9888 11.9283 18.3535 12.7047 18.3535C19.7283 18.3535 25.4106 24.0359 25.4106 31.0594C25.4106 31.8359 24.7753 32.4712 23.9989 32.4712Z" fill="#1F2041" fillOpacity="0.25" />
            <path d="M36.7068 19.7653C36.7068 20.5418 36.0715 21.177 35.295 21.177C31.9421 21.177 28.9421 22.8712 27.1774 25.4476C26.7892 24.4594 26.3303 23.5418 25.7656 22.6947C28.095 20.0123 31.5186 18.3535 35.295 18.3535C36.0715 18.3535 36.7068 18.9888 36.7068 19.7653Z" fill="#1F2041" fillOpacity="0.25" />
            <path d="M24 48C10.7647 48 0 37.2353 0 24C0 10.7647 10.7647 0 24 0C37.2353 0 48 10.7647 48 24C48 37.2353 37.2353 48 24 48ZM24 2.82353C12.3176 2.82353 2.82353 12.3176 2.82353 24C2.82353 35.6824 12.3176 45.1765 24 45.1765C35.6824 45.1765 45.1765 35.6824 45.1765 24C45.1765 12.3176 35.6824 2.82353 24 2.82353Z" fill="#1F2041" fillOpacity="0.25" />
          </svg>
          <ul style={{ display: "flex", }}>
            <li><Link to="/ui_kit/index.html">Colors-and-type</Link></li>
          </ul>
        </header>
        <div className="page">
          <div className="form-elements">
            <div className="form-elements__column form-elements__column-1">
              <div className="form-elements__column-item">
                <TextField variables={{ title: "Text Field", placeholder: "Email" }} />
              </div>
              <div className="form-elements__column-item">
                <TextField variables={{ title: "Text Field", placeholder: "This is pretty awesome" }} />
              </div>
              <div className="form-elements__column-item">
                <TextField variables={{ title: "Dropdown", placeholder: "Сколько гостей" }} />
              </div>
              <div className="form-elements__column-item">
                <TextField variables={{ title: "masked text field", placeholder: "ДД.ММ.ГГГГ" }} />
              </div>
              <div className="form-elements__column-item">
                <LengthStay variables={{
                  dateArrivalTitle: "date Dropdown",
                  dateArrivalPlaceholder: "ДД.ММ.ГГГГ",
                  dateDepartureTitle: "date Dropdown",
                  dateDeparturePlaceholder: "19.08.2019",
                }} />
              </div>
              <div className="form-elements__column-item">
                <TextField variables={{ title: "filter date dropdown", placeholder: "ДД.ММ.ГГГГ" }} />
              </div>
              <div className="form-elements__column-item">
                <div className="caption">subscription text field</div>
                <SubscriptionField />
              </div>
              <div className="form-elements__column-item">
                <AmountRoomsDropdown />
              </div>
              <div className="form-elements__column-item">
                <AmountRoomsDropdown />
              </div>
              <div className="form-elements__column-item">
                <AdditionalAmenities />
              </div>
              <div className="form-elements__column-item">
                <AdditionalAmenities />
              </div>
              <div className="form-elements__column-item">
                <RoomDetails />
              </div>
            </div>
            <div className="form-elements__column form-elements__column-2">
              <div className="form-elements__column-item">
                <PermissionsCheckbox />
              </div>
              <div className="form-elements__column-item">
                <GenderSelect />
              </div>
              <div className="form-elements__column-item">
                <SpecialOfers variables={{ title: "Toggle" }} />
                <SpecialOfers variables={{ title: "" }} />
              </div>
              <div className="form-elements__column-item">
                <p className="caption">
                  like button
                </p>
                <LikeButton />
                <LikeButton />
              </div>
              <div className="form-elements__column-item">
                <p className="caption">rate button</p>
                <Rating />
              </div>
              <div className="form-elements__column-item">
                <p className="caption">dropdown</p>
                <AmountGuestsDropdown />
              </div>
            </div>
            <div className="form-elements__column form-elements__column-3">
              <div className="form-elements__column-item ">
                <RangeSlider />
              </div>
              <div className="form-elements__column-item">
                <p className="caption">Buttons</p>
                <Button buttonOptions={{ classButton: "button-background", width: "99px", height: "44px", text: "CLICK ME" }} />
                <Button buttonOptions={{ classButton: "button-background", width: "99px", height: "44px", text: "CLICK ME" }} />
              </div>
              <div className="form-elements__column-item">
                <Button buttonOptions={{ classButton: "button-border", text: "CLICK ME" }} />
                <Button buttonOptions={{ classButton: "button-border", text: "CLICK ME" }} />
              </div>
              <div className="form-elements__column-item">
                <div className="">
                  <Button buttonOptions={{ classButton: "button-text", text: "CLICK ME" }} />
                  <Button buttonOptions={{ classButton: "button-text", text: "CLICK ME" }} />
                </div>
              </div>
              <div className="form-elements__column-item">
                <Button buttonOptions={{ classButton: "button-background", width: "320px", height: "44px", text: "перейти к оплате", img: true }} />
              </div>
              <div className="form-elements__column-item">
                <p className="caption">dropdown</p>
                <AmountGuestsDropdown />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}