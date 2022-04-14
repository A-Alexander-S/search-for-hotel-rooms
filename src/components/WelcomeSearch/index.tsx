import React from "react";
import LengthStay from "../LengthStay";
import AmountGuestsDropdown from "../AmountGuestsDropdown";
import Button from "../Button";
import "./welcome-search.scss";

export default class WelcomeSearch extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="welcome-search">
        <div className="welcome-search__title">
          Найдём номера под ваши пожелания
        </div>
        <div className="welcome-search__wrapper-length-stay">
          <LengthStay options={{
            dateArrivalTitle: "прибытие",
            dateArrivalPlaceholder: "ДД.ММ.ГГГГ",
            dateDepartureTitle: "выезд",
            dateDeparturePlaceholder: "ДД.ММ.ГГГГ",
          }} />
        </div>
        <div className="welcome-search__wrapper-amount-guests">
          <p className="caption">гости</p>
          <AmountGuestsDropdown />
        </div>
        <div className="welcome-search__wrapper-button">
          <Button options={{ classButton: "button-background", text: "подобрать номер", width: "320px", height: "44px", img: true }} />
        </div>
      </div>
    )
  }
}