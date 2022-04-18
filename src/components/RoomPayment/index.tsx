import React from "react";
import LengthStay from '../LengthStay';
import AmountGuestsDropdown from '../AmountGuestsDropdown';
import Button from '../Button';
import "./room-payment.scss";
//&nbsp;
export default class RoomPayment extends React.Component {

  renderSvgPic = () => {
    return <svg className="exclamation-in-circle" width="20" height="21" viewBox="0 0 20 21" fill="none" >
      <circle cx="10" cy="10.5576" r="9.5" stroke="#1F2041" strokeOpacity="0.25" />
      <path d="M9.25463 8.10162H11.1266V14.5576H9.25463V8.10162ZM10.1906 7.20162C9.84663 7.20162 9.56663 7.10162 9.35063 6.90162C9.13463 6.70162 9.02663 6.45362 9.02663 6.15762C9.02663 5.86162 9.13463 5.61362 9.35063 5.41362C9.56663 5.21362 9.84663 5.11362 10.1906 5.11362C10.5346 5.11362 10.8146 5.20962 11.0306 5.40162C11.2466 5.59362 11.3546 5.83362 11.3546 6.12162C11.3546 6.43362 11.2466 6.69362 11.0306 6.90162C10.8146 7.10162 10.5346 7.20162 10.1906 7.20162Z" fill="#1F2041" fillOpacity="0.25" />
    </svg>
  }
  render(): React.ReactNode {
    return (
      <div className="room-payment">
        <div className="room-payment__header">
          <p className="room-payment__header-item">
            <span className="room-payment__symbol-number">№ </span>
            <span className="room-payment__number-room">888</span>&ensp;
            <span className="room-payment__class-room">люкс</span>
          </p>
          <p className="room-payment__header-item room-payment__header-price">
            <span className="room-payment__price">9&nbsp;990</span>
            <span className="room-payment__header-symbol-ruble">₽</span>&ensp;
            <span className="room-payment__header-subtext">в сутки</span>
          </p>
        </div>
        <div className="room-payment__wrapper-length-stay">
          <LengthStay
            options={{
              dateArrivalTitle: 'Прибытие',
              dateArrivalPlaceholder: '19.08.2019',
              dateDepartureTitle: 'Выезд',
              dateDeparturePlaceholder: '23.08.2019'
            }} />
        </div>
        <div className="room-payment__wrapper-amount-guests-dropdown">
          <p className="caption">Гости</p>
          <AmountGuestsDropdown />
        </div>
        <div className="room-payment__price-accommodation room-payment__text">
          <p className="room-payment__price-accommodation-item">
            <span>9&nbsp;990</span><span>₽</span><span>&nbsp;x&nbsp;</span><span>4</span><span>&nbsp;суток</span>
          </p>
          <p className="room-payment__price-accommodation-item">
            <span id="price-accommodation">39960</span><span>₽</span>
          </p>
        </div>
        <div className="room-payment__price-services room-payment__text">
          <div className="room-payment__price-services-item">
            <span>Сбор за услуги: скидка <span>2&nbsp;179</span>₽</span>
            {this.renderSvgPic()}
          </div>
          <div className="room-payment__price-services-item">
            <span><span id="price-services">0</span>₽</span>
          </div>
        </div>
        <div className="room-payment__price-additional-services room-payment__text">
          <div className="room-payment__price-additional-services-item">
            <span className="room-payment__price-additional-services-text">Сбор за дополнительные услуги</span>
            {this.renderSvgPic()}
          </div>
          <div className="room-payment__price-additional-services-item">
            <span id="price-additional-services">300</span><span>₽</span>
          </div>
        </div>
        <div className="room-payment__final-price">
          <span className="room-payment__final-price-item">
            Итого
          </span>
          <span style={{ flex: "1 1 100%", borderBottom: "1px dashed rgba(31, 32, 65, 0.25)" }}></span>
          <span className="room-payment__final-price-item">
            38&nbsp;081<span>₽</span>
          </span>
        </div>
        <div className="room-payment__wrapper-button">
          <Button
            options={{
              classButton: "button-background",
              text: "Забронировать",
              width: "100%",
              img: true,
            }} />
        </div>
      </div>
    )
  }
}