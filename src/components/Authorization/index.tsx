import React from "react";
import "./authorization.scss";
import TextField from "../TextField";
import Button from "../Button";

export default class Authorization extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="authorization">
        <p className="authorization__title">Войти</p>
        <div
          className="authorization__wrapper-text-field
        authorization__wrapper-text-field--email">
          <TextField
            options={{
              type: "email",
              name: "email"
            }} >Email</TextField>
        </div>
        <div
          className="authorization__wrapper-text-field
        authorization__wrapper-text-field--password">
          <TextField
            options={{
              type: "password",
              name: "password"
            }} >Пароль</TextField>
        </div>
        <div className="authorization__wrapper-button">
          <Button
            options={{
              classButton: "button-background",
              text: "войти",
              width: "320px",
              img: true
            }} />
        </div>
        <div className="authorization__create-account">
          <p className="authorization__create-account-text">
            Нет аккаунта на Toxin?
          </p>
          <Button
            options={{
              classButton: "button-border",
              text: "Создать",
            }} />
        </div>
      </div>
    )
  }
}