import React, { LegacyRef } from "react";
import "nouislider/dist/nouislider.js";
import noUiSlider from "nouislider";
import "./range-slider.scss";

export class RangeSlider extends React.Component {
  private rangeSlider: React.RefObject<HTMLDivElement>;
  // private rangeSlider = React.createRef<HTMLDivElement>();

  constructor(props) {
    super(props)

    this.rangeSlider = React.createRef<HTMLDivElement>();
  }

  componentDidMount(): void {
    if (this.rangeSlider) {
      noUiSlider.create(this.rangeSlider.current, {
        start: [20, 100000],
        connect: true,
        step: 1,
        range: {
          'min': 0,
          'max': 100000
        }
      });
    }

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    /**
     * value  - значение от 1 до 2 ползунка
     * handle - сам ползунок
    */
  }

  render(): React.ReactNode {
    return (
      <div className="range-slider" >
        <p className="caption">Range Slider</p>
        <div className="range-slider__price-range">
          <div className="range-slider__inputs">
            <input id="input-0" className="range-slider__input" placeholder="5000₽" type="number" />
            <span>-</span>
            <input id="input-1" className="range-slider__input" placeholder="10000₽" type="number" />
          </div>
        </div>
        <div id="range-slider" className="range-slider__slider" ref={this.rangeSlider}></div>
      </div>
    );
  }
}