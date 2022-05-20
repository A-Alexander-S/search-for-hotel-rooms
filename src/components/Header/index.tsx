import React, { createRef } from "react";
import "./header.scss";
import Button from "../Button";

export default class Header extends React.Component {

  state = {
    classesHeaderNav: "header__nav",
    classesHeaderBurger: "header__burger",
  }

  private headerNavRef: React.RefObject<HTMLDivElement>
  private headerBurgerRef: React.RefObject<HTMLDivElement>

  constructor(props) {
    super(props);
    this.headerNavRef = createRef();
    this.headerBurgerRef = createRef();
  }

  handlerClickHeaderBurger = () => {
    // const indexClassHeaderNav = this.state.classesHeaderBurger.indexOf('header__nav-active');
    // const indexClassHeaderBurger = this.state.classesHeaderBurger.indexOf('header__burger-active');
    if (this.state.classesHeaderNav === "header__nav") {
      this.setState({
        classesHeaderNav: "header__nav header__nav-active",
        classesHeaderBurger: "header__burger header__burger-active"
      })
    } else {
      this.setState({
        classesHeaderNav: "header__nav",
        classesHeaderBurger: "header__burger"
      })
    }

    // if (indexClassHeaderBurger != -1) {
    //   this.setState({
    //     classesHeaderNav: this.state.classesHeaderNav.slice(0, indexClassHeaderNav),
    //     // classesHeaderBurger: this.state.classesHeaderBurger.slice(0, indexClassHeaderBurger)
    //   });
    //   this.setState({
    //     // classesHeaderNav: this.state.classesHeaderNav.slice(0, indexClassHeaderNav),
    //     classesHeaderBurger: this.state.classesHeaderBurger.slice(0, indexClassHeaderBurger)
    //   });
    // } else {
    //   this.setState({
    //     indexClassHeaderNav: this.state.classesHeaderNav + 'header__nav-active',
    //     classesHeaderBurger: this.state.classesHeaderBurger + 'header__burger-active'
    //   })
    // }

  }
  render(): React.ReactNode {
    return (
      <header className="header">
        <div className="container">
          <div className="header__flex">
            <div className="header__logo">
              <svg width="106" height="40" viewBox="0 0 106 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.335 13.3683C62.5567 13.3683 62.7375 13.4442 62.8775 13.5958C63.0292 13.7358 63.105 13.9167 63.105 14.1383C63.105 14.3483 63.0292 14.5292 62.8775 14.6808C62.7375 14.8325 62.5567 14.9083 62.335 14.9083H58.5725V25.4083C58.5725 25.63 58.4967 25.8167 58.345 25.9683C58.205 26.1083 58.0242 26.1783 57.8025 26.1783C57.5925 26.1783 57.4117 26.1083 57.26 25.9683C57.1083 25.8167 57.0325 25.63 57.0325 25.4083V14.9083H53.27C53.06 14.9083 52.8792 14.8325 52.7275 14.6808C52.5758 14.5292 52.5 14.3483 52.5 14.1383C52.5 13.9167 52.5758 13.7358 52.7275 13.5958C52.8792 13.4442 53.06 13.3683 53.27 13.3683H62.335Z" fill="#1F2041" />
                <path d="M68.9076 13.3683C69.7943 13.3683 70.6285 13.5375 71.4101 13.8758C72.2034 14.2142 72.8918 14.675 73.4751 15.2583C74.0701 15.8417 74.5368 16.53 74.8751 17.3233C75.2134 18.105 75.3826 18.9392 75.3826 19.8258C75.3826 20.8642 75.1609 21.8208 74.7176 22.6958C74.2743 23.5708 73.6735 24.3058 72.9151 24.9008C72.9151 24.9008 72.9035 24.9125 72.8801 24.9358C72.3201 25.3558 71.7076 25.6883 71.0426 25.9333C70.3776 26.1667 69.6659 26.2833 68.9076 26.2833C68.0209 26.2833 67.1868 26.1142 66.4051 25.7758C65.6234 25.4375 64.9351 24.9767 64.3401 24.3933C63.7568 23.81 63.2959 23.1275 62.9576 22.3458C62.6193 21.5642 62.4501 20.7242 62.4501 19.8258C62.4501 18.8458 62.6484 17.9417 63.0451 17.1133C63.4418 16.2733 63.9843 15.5558 64.6726 14.9608L64.7426 14.8908C64.7543 14.8908 64.7718 14.8792 64.7951 14.8558C65.3551 14.3892 65.9851 14.0275 66.6851 13.7708C67.3851 13.5025 68.1259 13.3683 68.9076 13.3683ZM68.9076 24.7433C69.3509 24.7433 69.771 24.6908 70.1676 24.5858C70.576 24.4692 70.9609 24.3117 71.3226 24.1133L65.1801 16.6408C64.8068 17.0725 64.5151 17.5625 64.3051 18.1108C64.0951 18.6475 63.9901 19.2192 63.9901 19.8258C63.9901 20.5025 64.1185 21.1383 64.3751 21.7333C64.6318 22.3283 64.9818 22.8533 65.4251 23.3083C65.8801 23.7517 66.4051 24.1017 67.0001 24.3583C67.5951 24.615 68.2309 24.7433 68.9076 24.7433ZM72.5301 23.1508C72.9384 22.7075 73.2535 22.2058 73.4751 21.6458C73.7085 21.0742 73.8251 20.4675 73.8251 19.8258C73.8251 19.1492 73.6968 18.5133 73.4401 17.9183C73.1834 17.3233 72.8276 16.8042 72.3726 16.3608C71.9293 15.9058 71.4101 15.55 70.8151 15.2933C70.2201 15.0367 69.5843 14.9083 68.9076 14.9083C68.4409 14.9083 67.9918 14.9725 67.5601 15.1008C67.1284 15.2175 66.7259 15.3925 66.3526 15.6258L72.5301 23.1508Z" fill="#1F2041" />
                <path d="M82.351 20.6308C82.1177 20.6308 81.9194 20.5375 81.756 20.3508L77.2585 14.5758C77.1302 14.4125 77.0777 14.2317 77.101 14.0333C77.1244 13.8233 77.2177 13.6542 77.381 13.5258C77.5444 13.3975 77.7252 13.3508 77.9235 13.3858C78.1335 13.4092 78.3027 13.5025 78.431 13.6658L82.351 18.6708L86.1835 13.7533C86.3119 13.59 86.4752 13.4967 86.6735 13.4733C86.8835 13.45 87.0702 13.5025 87.2335 13.6308C87.3969 13.7592 87.4902 13.9283 87.5135 14.1383C87.5369 14.3367 87.4844 14.5175 87.356 14.6808L82.946 20.3508C82.7944 20.5375 82.596 20.6308 82.351 20.6308ZM87.2685 26.2658C87.2219 26.2658 87.146 26.26 87.041 26.2483C86.9477 26.2367 86.8369 26.2075 86.7085 26.1608C86.5802 26.1025 86.4402 26.0267 86.2885 25.9333C86.1485 25.8283 86.0085 25.6883 85.8685 25.5133L82.351 20.9808L78.5185 25.9158C78.3902 26.0792 78.221 26.1725 78.011 26.1958C77.8127 26.2192 77.6319 26.1667 77.4685 26.0383C77.3052 25.91 77.2119 25.7467 77.1885 25.5483C77.1652 25.3383 77.2177 25.1517 77.346 24.9883L81.756 19.3183C81.896 19.1317 82.0885 19.0383 82.3335 19.0383C82.5902 19.0383 82.7944 19.1317 82.946 19.3183L87.041 24.5683C87.0994 24.65 87.1519 24.7025 87.1985 24.7258C87.2452 24.7492 87.2802 24.7667 87.3035 24.7783C87.5019 24.7783 87.6652 24.8483 87.7935 24.9883C87.9335 25.1167 88.0094 25.28 88.021 25.4783C88.0444 25.6883 87.986 25.8692 87.846 26.0208C87.706 26.1725 87.531 26.2542 87.321 26.2658H87.2685Z" fill="#1F2041" />
                <path d="M91.7343 26.2658C91.5126 26.2658 91.326 26.19 91.1743 26.0383C91.0226 25.8867 90.9468 25.7 90.9468 25.4783V14.1033C90.9468 13.8933 91.0226 13.7125 91.1743 13.5608C91.326 13.4092 91.5126 13.3333 91.7343 13.3333C91.9443 13.3333 92.1251 13.4092 92.2768 13.5608C92.4285 13.7125 92.5043 13.8933 92.5043 14.1033V25.4783C92.5043 25.7 92.4285 25.8867 92.2768 26.0383C92.1251 26.19 91.9443 26.2658 91.7343 26.2658Z" fill="#1F2041" />
                <path d="M104.938 26.2308C104.681 26.2308 104.483 26.1317 104.343 25.9333L97.0452 16.3433V25.4783C97.0452 25.6883 96.9693 25.8692 96.8177 26.0208C96.6777 26.1608 96.5027 26.2308 96.2927 26.2308C96.0943 26.2308 95.9193 26.1608 95.7677 26.0208C95.616 25.8692 95.5402 25.6883 95.5402 25.4783V14.1208C95.5402 13.9575 95.5868 13.8117 95.6802 13.6833C95.7735 13.555 95.9018 13.4675 96.0652 13.4208C96.2168 13.3625 96.3685 13.3567 96.5202 13.4033C96.6718 13.45 96.8002 13.5375 96.9052 13.6658L104.185 23.2733V14.1208C104.185 13.9225 104.255 13.7475 104.395 13.5958C104.547 13.4442 104.728 13.3683 104.938 13.3683C105.148 13.3683 105.323 13.4442 105.463 13.5958C105.614 13.7475 105.69 13.9225 105.69 14.1208V25.4783C105.69 25.6417 105.643 25.7875 105.55 25.9158C105.457 26.0442 105.334 26.1375 105.183 26.1958C105.066 26.2192 104.984 26.2308 104.938 26.2308Z" fill="#1F2041" />
                <path d="M19.9999 27.0589C19.3528 27.0589 18.8234 26.5295 18.8234 25.8824C18.8234 21.353 15.1175 17.6471 10.5881 17.6471C9.94103 17.6471 9.41162 17.1177 9.41162 16.4707C9.41162 15.8236 9.94103 15.2942 10.5881 15.2942C16.441 15.2942 21.1763 20.0295 21.1763 25.8824C21.1763 26.5295 20.6469 27.0589 19.9999 27.0589Z" fill="url(#paint0_linear_18370_61)" />
                <path d="M30.5882 16.4707C30.5882 17.1177 30.0588 17.6471 29.4117 17.6471C26.6176 17.6471 24.1176 19.0589 22.647 21.206C22.3235 20.3824 21.9411 19.6177 21.4705 18.9118C23.4117 16.6765 26.2646 15.2942 29.4117 15.2942C30.0588 15.2942 30.5882 15.8236 30.5882 16.4707Z" fill="url(#paint1_linear_18370_61)" />
                <path d="M20 40C8.97059 40 0 31.0294 0 20C0 8.97059 8.97059 0 20 0C31.0294 0 40 8.97059 40 20C40 31.0294 31.0294 40 20 40ZM20 2.35294C10.2647 2.35294 2.35294 10.2647 2.35294 20C2.35294 29.7353 10.2647 37.6471 20 37.6471C29.7353 37.6471 37.6471 29.7353 37.6471 20C37.6471 10.2647 29.7353 2.35294 20 2.35294Z" fill="url(#paint2_linear_18370_61)" />
                <defs>
                  <linearGradient id="paint0_linear_18370_61" x1="15.294" y1="15.2942" x2="15.294" y2="27.0589" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BC9CFF" />
                    <stop offset="1" stopColor="#8BA4F9" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_18370_61" x1="26.0293" y1="15.2942" x2="26.0293" y2="21.206" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6FCF97" />
                    <stop offset="1" stopColor="#66D2EA" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_18370_61" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BC9CFF" />
                    <stop offset="1" stopColor="#8BA4F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <nav
              className={this.state.classesHeaderNav}
              ref={this.headerNavRef}>

              <ul className="header__list">
                <li className="header__list-item">
                  <a className="header__list-link" href="#">О нас</a>
                </li>
                <li className="header__list-item">
                  <a className="header__list-link" href="#">Услуги</a>
                </li>
                <li className="header__list-item">
                  <a className="header__list-link" href="#">Вакансии</a>
                </li>
                <li className="header__list-item">
                  <a className="header__list-link" href="#">Новости</a>
                </li>
                <li className="header__list-item">
                  <a className="header__list-link" href="#">Соглашения</a>
                </li>
              </ul>
            </nav>
            <div className="header__buttons">
              <div className="header__wrapp-button">
                <Button
                  options={{
                    classButton: "button-border",
                    text: "Войти",
                    width: "87px",
                    height: "34px",
                  }} />
              </div >
              <div className="header__wrapp-button">
                <Button
                  options={{
                    classButton: "button-background",
                    text: "зарегистрироваться",
                    width: "196px",
                    height: "34px",
                  }} />
              </div>
            </div>
            <div
              className={this.state.classesHeaderBurger}
              ref={this.headerBurgerRef}
              onClick={this.handlerClickHeaderBurger}>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}