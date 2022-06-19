import React, { LegacyRef } from "react";
import noUiSlider from "nouislider";
import "./range-slider.scss";
// import "nouislider/dist/nouislider.js";

export class RangeSlider extends React.Component {
  private rangeSlider: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props)

    this.rangeSlider = React.createRef<HTMLDivElement>();
  }


  /**
   * plugin noUiSlider
  */
  componentDidMount() {
    if (this.rangeSlider) {
      noUiSlider.create(this.rangeSlider.current, {
        start: [4000, 15000],
        connect: true,
        step: 1,
        range: {
          'min': [4000],
          'max': [15000]
        }
      });

      const input0 = document.getElementById('input-0');
      const input1 = document.getElementById('input-1');
      const inputs = [input0, input1];

      // @ts-ignore
      this.rangeSlider.current.noUiSlider.on('update', function (values, handle) {
        //@ts-ignore
        inputs[handle].value = Math.round(values[handle]);
        // console.log(values)
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        // console.log(arr);
        // @ts-ignore
        this.rangeSlider.current.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
        // @ts-ignore
        el.addEventListener('change', (e) => {
          // @ts-ignore
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }
  }

  render(): React.ReactNode {
    return (
      <div className="range-slider" >
        <p className="caption">Range Slider</p>
        <div className="range-slider__price-range">
          <div className="range-slider__inputs">
            <input
              id="input-0"
              className="range-slider__input"
              placeholder="4000₽"
              type="number"
              min={4000}
              max={15000} />
            <span>-</span>
            <input
              id="input-1"
              className="range-slider__input"
              placeholder="15000₽"
              type="number"
              min={4000}
              max={15000} />
          </div>
        </div>
        <div
          id="range-slider"
          className="range-slider__slider"
          ref={this.rangeSlider}
        ></div>
      </div>
    );
  }
}