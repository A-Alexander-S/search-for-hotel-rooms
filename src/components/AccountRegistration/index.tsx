import React from "react";
import "./account-registration.scss";
import TextField from "../TextField";
import GenderSelect from "../GenderSelect";
import SpecialOfers from "../SpecialOfers";
import Button from "../Button";

export default class AccountRegistration extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="account-registration">
        <p className="account-registration__title">
          Регистрация аккаунта
        </p>
        <fieldset className="account-registration__general-user-info">
          <div
            className="account-registration__wrapper-text-field 
          account-registration__wrapper-text-field--name">
            <TextField
              options={{ type: "text", name: "name" }}
            >Имя</TextField>
          </div>
          <div
            className="account-registration__wrapper-text-field 
          account-registration__wrapper-text-field--surname">
            <TextField
              options={{ type: "text", name: "surname" }}
            >Фамилия</TextField>
          </div>
          <div className="account-registration__wrapper-gender-select">
            <GenderSelect />
          </div>
          <div
            className="account-registration__wrapper-text-field 
          account-registration__wrapper-text-field--date-of-birth">
            <p className="caption">
              Дата рождения
            </p>
            <TextField
              options={{ type: "date", name: "DateOfBirth" }} />
          </div>
        </fieldset>
        <fieldset className="account-registration__login-information">
          <p className="caption">
            данные для входа в сервис
          </p>
          <div
            className="account-registration__wrapper-text-field 
          account-registration__wrapper-text-field--email">
            <TextField
              options={{ type: "email", name: "email" }}
            >Email</TextField>
          </div>
          <div
            className="account-registration__wrapper-text-field 
          account-registration__wrapper-text-field--passwrd">
            <TextField
              options={{ type: "password", name: "password" }}
            >Пароль</TextField>
          </div>
        </fieldset>
        <div className="account-registration__wrapper-special-ofers">
          <SpecialOfers />
        </div>
        <div className="account-registration__wrapper-button">
          <Button
            options={{
              classButton: "button-background",
              text: "перейти к оплате",
              width: "320px",
              img: true
            }} />
        </div>
        <div className="account-registration__login">
          <p className="account-registration__login-text">Уже есть аккаунт на Toxin</p>
          <Button options={{ classButton: "button-border", text: "войти" }} />
        </div>
      </div>
    )
  }
}