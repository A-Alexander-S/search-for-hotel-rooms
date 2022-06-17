import React from "react";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/ru';

// new AirDatepicker('#air-datepicker-a', {
//   locale: localeEn
// })

export class DateFilter extends React.Component {

  render(): React.ReactNode {
    return (
      <>
        {/* <input type="text" id="air-datepicker-a" className="datepicker-here air-datepicker-global-container" /> */}
        <div id="air-datepicker-a" className="air-datepicker-global-container air-datepicker-a"></div>
      </>
    )
  }
}