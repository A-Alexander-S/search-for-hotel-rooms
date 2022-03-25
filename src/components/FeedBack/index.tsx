import React, { Component } from "react";
import "./feed-back.scss";
import LikeButton from "../../components/LikeButton";
import avatar_ from "./img/avatar_.jpg";

export default class FeedBack extends Component {
  render(): React.ReactNode {
    return (
      <div className="feedback">
        <div className="feedback__user">
          <div className="feedback__user-avatar">
            <img className="feedback__userpic" src={avatar_} />
          </div>
          <div className="">
            <p className="feedback__user-name">Мурад Сарафанов</p>
            <p className="feedback__date">5 дней назад</p>
          </div>
        </div>
        <div className="feedback__feedback">
          <div className="feedback__wrap-like-button">
            <LikeButton />
          </div>
          <div className="feedback__text">
            Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.
          </div>
        </div>
      </div>
    );
  }
}

