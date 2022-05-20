import React from "react";
import "./welcom-page.scss";
import Header from "../../components/Header";
import WelcomeSearch from "../../components/WelcomeSearch";
import Footer from "../../components/Footer";

export default class WelcomPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <main className="main-welcom">
          <div className="container">
            <div className="main-welcom__wrapp-welcom-search">
              <WelcomeSearch />
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}