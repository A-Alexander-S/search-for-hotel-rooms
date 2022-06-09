import React from "react";
import "./rating.scss";

interface IRatingState {
  ratingValue: number,
  ratingActiveWidth: object
}

export class Rating extends React.Component<{}, IRatingState> {

  ratingRef: React.RefObject<HTMLDivElement>;
  ratingActiveRef: React.RefObject<HTMLDivElement>;

  state: IRatingState = {
    ratingValue: 3.6,
    ratingActiveWidth: {}
  }

  constructor(props) {
    super(props);
    this.ratingRef = React.createRef();
    this.ratingActiveRef = React.createRef();
  }

  /**
   * method paints the stars when hovering over the mouse, 
   * by changing a certain plate with the class rating_active
  */
  handlerFocusStar = (e: React.FormEvent<HTMLInputElement>) => {

    if (e.currentTarget.id == "rating__item-1") {
      this.setState({
        ratingActiveWidth: { width: "20%" }
      });
    } else if (e.currentTarget.id == "rating__item-2") {
      this.setState({
        ratingActiveWidth: { width: "40%" }
      });
    } else if (e.currentTarget.id == "rating__item-3") {
      this.setState({
        ratingActiveWidth: { width: "60%" }
      });
    } else if (e.currentTarget.id == "rating__item-4") {
      this.setState({
        ratingActiveWidth: { width: "80%" }
      });
    } else if (e.currentTarget.id == "rating__item-5") {
      this.setState({
        ratingActiveWidth: { width: "100%" }
      });
    }
  }

  /**
   * Method sets this.state.ratingActiveWidth to the desired value 
   * for the given rating when the mouse cursor is removed
  */
  handlerRatingItemsMouseLeave = (e: React.FormEvent<HTMLElement>) => {
    this.setRatingActiveWidth();
  }

  /**
   * 
   * Method calculates the percentage of coloring for a block with the rating_active class, 
   * based on the rating value.
   * Sets the value of the ratingActiveWidth variable in the state.
   *  ratingActiveWidth is the style object for the block with the class rating__active
  */
  setRatingActiveWidth = () => {
    this.setState((state: IRatingState) => ({
      ratingActiveWidth: { width: (state.ratingValue / 0.05) + "%" }
    }))
  }

  componentDidMount() {
    this.setRatingActiveWidth();
  }

  generatingPicStars = () => {
    return <svg className="rating__pic-stars" width="24" height="19" viewBox="0 0 20 19" fill="none">
      <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
      <defs>
        <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BC9CFF" />
          <stop offset="1" stopColor="#8BA4F9" />
        </linearGradient>
      </defs>
    </svg>
  }

  render(): React.ReactNode {
    return (
      <div
        className="rating"
        ref={this.ratingRef}>
        <div className="rating__body">
          {this.generatingPicStars()}
          {this.generatingPicStars()}
          {this.generatingPicStars()}
          {this.generatingPicStars()}
          {this.generatingPicStars()}
          <div
            className="rating__active"
            style={this.state.ratingActiveWidth}
            data-rating-value={this.state.ratingValue}
            ref={this.ratingActiveRef}
          ></div>
          <div
            className="rating__items"
            onMouseLeave={this.handlerRatingItemsMouseLeave}>
            <input
              id="rating__item-1"
              className="rating__item"
              type="radio"
              name="rating"
              value={1}
              onMouseEnter={this.handlerFocusStar}
            />
            <input
              id="rating__item-2"
              className="rating__item"
              type="radio"
              name="rating"
              value={2}
              onMouseEnter={this.handlerFocusStar} />
            <input
              id="rating__item-3"
              className="rating__item"
              type="radio"
              name="rating"
              value={3}
              onMouseEnter={this.handlerFocusStar} />
            <input
              id="rating__item-4"
              className="rating__item"
              type="radio"
              name="rating"
              value={4}
              onMouseEnter={this.handlerFocusStar} />
            <input
              id="rating__item-5"
              className="rating__item"
              type="radio"
              name="rating"
              value={5}
              onMouseEnter={this.handlerFocusStar} />
          </div>
        </div>
      </div>
    )
  }
}