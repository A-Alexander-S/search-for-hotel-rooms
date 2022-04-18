import React from "react";
import { Link } from "react-router-dom";
import WelcomeSearch from "../../../components/WelcomeSearch"
import RoomPayment from "../../../components/RoomPayment"
import "./cards-ui_kit-page.scss";

export default class CardsUiKitPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9989 32.4712C23.2224 32.4712 22.5871 31.8359 22.5871 31.0594C22.5871 25.6241 18.14 21.177 12.7047 21.177C11.9283 21.177 11.293 20.5418 11.293 19.7653C11.293 18.9888 11.9283 18.3535 12.7047 18.3535C19.7283 18.3535 25.4106 24.0359 25.4106 31.0594C25.4106 31.8359 24.7753 32.4712 23.9989 32.4712Z" fill="#1F2041" fillOpacity="0.25" />
            <path d="M36.7068 19.7653C36.7068 20.5418 36.0715 21.177 35.295 21.177C31.9421 21.177 28.9421 22.8712 27.1774 25.4476C26.7892 24.4594 26.3303 23.5418 25.7656 22.6947C28.095 20.0123 31.5186 18.3535 35.295 18.3535C36.0715 18.3535 36.7068 18.9888 36.7068 19.7653Z" fill="#1F2041" fillOpacity="0.25" />
            <path d="M24 48C10.7647 48 0 37.2353 0 24C0 10.7647 10.7647 0 24 0C37.2353 0 48 10.7647 48 24C48 37.2353 37.2353 48 24 48ZM24 2.82353C12.3176 2.82353 2.82353 12.3176 2.82353 24C2.82353 35.6824 12.3176 45.1765 24 45.1765C35.6824 45.1765 45.1765 35.6824 45.1765 24C45.1765 12.3176 35.6824 2.82353 24 2.82353Z" fill="#1F2041" fillOpacity="0.25" />
          </svg>
          <ul style={{ display: "flex", }}>
            <li style={{ marginRight: "10px" }}><Link to="/ui_kit/index.html">Colors-and-type</Link></li>
            <li style={{ marginRight: "10px" }}><Link to='/formelements'>formElements</Link></li>
          </ul>
        </header>
        <div className="card-page">
          <div className="card-page__item card-page__item-1">
            <WelcomeSearch />
          </div>
          <div className="card-page__item card-page__item-2">
            <RoomPayment />
          </div>
        </div>
      </>
    )
  }
}