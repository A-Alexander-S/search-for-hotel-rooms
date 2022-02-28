import React from "react";
import "./rating.scss";

export class Rating extends React.Component {

  handleClick = (e: React.MouseEvent) => {

  }

  render(): React.ReactNode {
    return (
      <div className="rating">
        <div className="rating__body">
          <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
            <defs>
              <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
          <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
            <defs>
              <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
          <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
            <defs>
              <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
          <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
            <defs>
              <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
          <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
            <defs>
              <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
          <div className="rating__active"></div>
          <div className="rating__items">
            <input id="rating__item-1" className="rating__item" type="radio" name="rating" value={1} />
            <input id="rating__item-2" className="rating__item" type="radio" name="rating" value={2} />
            <input id="rating__item-3" className="rating__item" type="radio" name="rating" value={3} />
            <input id="rating__item-4" className="rating__item" type="radio" name="rating" value={4} />
            <input id="rating__item-5" className="rating__item" type="radio" name="rating" value={5} />
          </div>
        </div>
        <div className="rating__value">3.6</div>
      </div>
    )
  }






  // render(): React.ReactNode {
  //   return (
  //     <div className="rating">
  // <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
  //   <defs>
  //     <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
  //       <stop stopColor="#BC9CFF" />
  //       <stop offset="1" stopColor="#8BA4F9" />
  //     </linearGradient>
  //   </defs>
  // </svg>
  // <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
  //   <defs>
  //     <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
  //       <stop stopColor="#BC9CFF" />
  //       <stop offset="1" stopColor="#8BA4F9" />
  //     </linearGradient>
  //   </defs>
  // </svg>
  // <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
  //   <defs>
  //     <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
  //       <stop stopColor="#BC9CFF" />
  //       <stop offset="1" stopColor="#8BA4F9" />
  //     </linearGradient>
  //   </defs>
  // </svg>
  // <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
  //   <defs>
  //     <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
  //       <stop stopColor="#BC9CFF" />
  //       <stop offset="1" stopColor="#8BA4F9" />
  //     </linearGradient>
  //   </defs>
  // </svg>
  // <svg width="24" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear_18447:196)" />
  //   <defs>
  //     <linearGradient id="paint0_linear_18447:196" x1="10" y1="-2" x2="10" y2="22" gradientUnits="userSpaceOnUse">
  //       <stop stopColor="#BC9CFF" />
  //       <stop offset="1" stopColor="#8BA4F9" />
  //     </linearGradient>
  //   </defs>
  // </svg>
  //       <div className="rating__items">
  //         <input id="rating__item-5" className="rating__item" type="radio" name="rating" value={5} />
  //         <label htmlFor="rating__item-5" className="rating__label" ></label>

  //         <input id="rating__item-4" className="rating__item" type="radio" name="rating" value={4} />
  //         <label htmlFor="rating__item-4" className="rating__label" ></label>

  //         <input id="rating__item-3" className="rating__item" type="radio" name="rating" value={3} defaultChecked={true} />
  //         <label htmlFor="rating__item-3" className="rating__label" ></label>

  //         <input id="rating__item-2" className="rating__item" type="radio" name="rating" value={2} />
  //         <label htmlFor="rating__item-2" className="rating__label" ></label>

  //         <input id="rating__item-1" className="rating__item" type="radio" name="rating" value={1} />
  //         <label htmlFor="rating__item-1" className="rating__label" ></label>
  //       </div>
  //     </div>
  //   )
  // }
}