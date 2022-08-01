import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  changeMaxPricePerRoomAction,
  changeMinPricePerRoomAction,
  changeMinPricePerRoomType,
  changeMaxPricePerRoomType
} from "../../actions/filterRoomsActions";
import "./range-slider.scss";

interface IRangeSliderProps {
  changeMinPricePerRoomAction: (minPricePerRoom: number) => changeMinPricePerRoomType,
  changeMaxPricePerRoomAction: (maxPricePerRoom: number) => changeMaxPricePerRoomType,
}

const priceGap = 1000;
const step = 500;

class RangeSlider extends React.Component<IRangeSliderProps>{

  state = {
    minPrice: 2500,
    maxPrice: 7500,
    ifMaxIsSmall: 1,
    isSmall: false,
    progressBarStyle: {
      left: '25%',
      right: '25%',
    }
  }

  constructor(props: IRangeSliderProps) {
    super(props);
  }

  /**
   * Change handler input with minimum price
  */
  handleChangeMinPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (this.state.maxPrice - +e.currentTarget.value > priceGap) {
      const percent = (+e.currentTarget.value / +e.currentTarget.max) * 100;
      this.setState({
        minPrice: +e.currentTarget.value,
        progressBarStyle: {
          ...this.state.progressBarStyle,
          left: `${percent}%`
        }
      });
    }
    if (this.state.maxPrice - +e.currentTarget.value <= priceGap
      && +e.currentTarget.value <= (10000 - priceGap)) {
      const percentLeft = (+e.currentTarget.value / +e.currentTarget.max) * 100;
      const percentRight = 100 - ((+e.currentTarget.value + priceGap) / +e.currentTarget.max) * 100;
      this.setState({
        minPrice: +e.currentTarget.value,
        maxPrice: +e.currentTarget.value + priceGap,
        progressBarStyle: {
          left: `${percentLeft}%`,
          right: `${percentRight}%`,
        }
      });
    }
  }

  /**
   * Change handler input with max price
  */
  handleChangeMaxPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (+e.currentTarget.value - this.state.minPrice >= priceGap
      && +e.currentTarget.value <= 10000) {
      const percent = 100 - (+e.currentTarget.value / +e.currentTarget.max) * 100;
      this.setState({
        maxPrice: +e.currentTarget.value,
        isSmall: false,
        progressBarStyle: {
          ...this.state.progressBarStyle,
          right: `${percent}%`
        }
      });
    }
    if (+e.currentTarget.value - this.state.minPrice <= priceGap) {
      const percent = 100 - ((this.state.minPrice + priceGap) / +e.currentTarget.max) * 100;
      this.setState({
        maxPrice: this.state.minPrice + priceGap,
        ifMaxIsSmall: +e.currentTarget.value,
        isSmall: true,
        progressBarStyle: {
          ...this.state.progressBarStyle,
          right: `${percent}%`
        }
      });
    }
  }

  /**
   * Change handler thumb  minimum price
  */
  handleDragableThumbMin = (e: React.MouseEvent<HTMLInputElement>) => {
    const percent = (+e.currentTarget.value / +e.currentTarget.max) * 100;
    if (this.state.maxPrice - +e.currentTarget.value < priceGap) {
      this.setState({
        minPrice: this.state.maxPrice - priceGap,
      });
    } else {
      this.setState({
        minPrice: +e.currentTarget.value,
        progressBarStyle: {
          ...this.state.progressBarStyle,
          left: `${percent}%`
        }
      });
    }
  }

  /**
   * Change handler thumb  max price
  */
  handleDragableThumbMax = (e: React.MouseEvent<HTMLInputElement>) => {
    const percent = 100 - (+e.currentTarget.value / +e.currentTarget.max) * 100;
    if (+e.currentTarget.value - this.state.minPrice < priceGap) {
      this.setState({
        ...this.state,
        maxPrice: this.state.minPrice + priceGap,
        isSmall: false
      });
    } else {
      this.setState({
        ...this.state,
        maxPrice: +e.currentTarget.value,
        isSmall: false,
        progressBarStyle: {
          ...this.state.progressBarStyle,
          right: `${percent}%`
        }
      });
    }
  }

  componentDidUpdate() {
    this.props.changeMinPricePerRoomAction(this.state.minPrice);
    this.props.changeMaxPricePerRoomAction(this.state.maxPrice);
  }

  render(): React.ReactNode {
    return (
      <div className="range-price">
        <div className="range-price__top">
          <span className="caption">диапазон цены</span>
          <div className="range-price__price-field">
            <input
              className="range-price__input range-price__input-min"
              name="price-min"
              type="number"
              min={0}
              max={10000}
              value={this.state.minPrice}
              onChange={this.handleChangeMinPriceInput}
            />
            <span style={{ padding: '0 5px', }}>-</span>
            <input
              className="range-price__input range-price__input-max"
              name="price-max"
              type="number"
              min={0}
              max={10000}
              value={this.state.isSmall ? this.state.ifMaxIsSmall : this.state.maxPrice}
              onChange={this.handleChangeMaxPriceInput}
            />
          </div>
        </div>
        <div id="range-slider" className="range-price__slider" >
          <div
            id="slider-progress"
            className="range-price__slider-progress"
            style={this.state.progressBarStyle}
          ></div>
          <div className="range-thumbs">
            <input
              className="range-thumbs__input range-thumbs__range-min"
              type="range"
              value={this.state.minPrice}
              step={step}
              min={0}
              max={10000}
              onInput={this.handleDragableThumbMin}
            />
            <input
              className="range-thumbs__input range-thumbs__range-max"
              type="range"
              value={this.state.maxPrice}
              step={step}
              min={0}
              max={10000}
              onInput={this.handleDragableThumbMax}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeMinPricePerRoomAction,
  changeMaxPricePerRoomAction
}, dispatch);

export default connect(null, mapDispatchToProps)(RangeSlider);