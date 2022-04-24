import React from "react";
import "./room-card.scss";
import { Rating } from "../Rating";
import arrowPrev from "./img/arrow_prev.png";
import arrowNext from "./img/arrow_next.png";

interface IRoomCardState {
  sliderTrackRightShift: {},
  sliderTrackLeftShift: {},
  offset: number
}

export default class RoomCard extends React.Component {
  private containerRef: React.RefObject<HTMLDivElement>
  private trackRef: React.RefObject<HTMLDivElement>
  private itemRef: React.RefObject<HTMLDivElement>
  private arrowPrev: React.RefObject<HTMLDivElement>
  private arrowNext: React.RefObject<HTMLDivElement>

  state: IRoomCardState = {
    sliderTrackRightShift: { right: "0px" },
    sliderTrackLeftShift: { left: "0px" },
    offset: 0
  }

  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.trackRef = React.createRef();
    this.itemRef = React.createRef();
    this.arrowPrev = React.createRef();
    this.arrowNext = React.createRef();
  }

  handlerClickBtnPrev = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (this.state.offset < 270) {
      this.setState((state: IRoomCardState) => ({
        offset: 810
      }));
    } else {
      this.setState((state: IRoomCardState) => ({
        offset: state.offset - 270
      }));
    }
    this.setState((state: IRoomCardState) => ({
      sliderTrackLeftShift: { left: `${-state.offset}px` }
    }))
  }

  handlerClickBtnNext = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (this.state.offset > 540) {
      this.setState((state: IRoomCardState) => ({
        offset: 0
      }));
    } else {
      this.setState((state: IRoomCardState) => ({
        offset: state.offset + 270
      }));
    }
    this.setState((state: IRoomCardState) => ({
      sliderTrackLeftShift: { left: `${-state.offset}px` }
    }))
  }

  render(): React.ReactNode {
    return (
      <div className="room-card">

        <div className="room-card__slider-container" ref={this.containerRef}>
          <div
            style={this.state.sliderTrackLeftShift}
            className="room-card__slider-track"
            ref={this.trackRef}>
            <div className="room-card__slider-item" ref={this.itemRef}>1</div>
            <div className="room-card__slider-item">2</div>
            <div className="room-card__slider-item">3</div>
            <div className="room-card__slider-item">4</div>
          </div>
          <div
            ref={this.arrowPrev}
            className="room-card__slider-btn-prev"
            onClick={this.handlerClickBtnPrev} >
            <img src={arrowPrev} alt="Стрелка влево" />
          </div>
          <div
            ref={this.arrowNext}
            className="room-card__slider-btn-next"
            onClick={this.handlerClickBtnNext}>
            <img src={arrowNext} alt="Стрелка вправо" />
          </div>
        </div>
        <div className="room-card__room-info">
          <p className="room-card__room-number">
            №&nbsp;<span id="room-card__number">888</span>
            <span className="room-card__room-clas">люкс</span>
          </p>
          <p className="room-card__overnight-price">
            <span id="room-card__overnight-price">9 990₽</span>&nbsp;
            <span className="room-card__overnight-price-text">в сутки</span>
          </p>
        </div>
        <div className="room-card__rating-and-reviews">
          <div className="room-card__wrapper-rating">
            <Rating />
          </div>
          <p className="room-card__reviews">
            <span className="room-card__number-reviews">145</span>&nbsp;
            <span className="room-card__reviews-text">Отзывов</span>
          </p>
        </div>
      </div>
    )
  }
}