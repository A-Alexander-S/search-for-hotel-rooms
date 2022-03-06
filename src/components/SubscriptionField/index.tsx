import React from "react";
import "./subscription-field.scss"

export default class SubscriptionField extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="subscription-field">
        <input className="subscription-field__input" placeholder="Email" type="text" />
      </div>
    )
  }
}