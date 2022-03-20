import React from "react";
import "./room-details.scss";
import smilingEmoticon from "./img/smiling_emoticon.png";
import locationCity from "./img/location_city.png";
import fire from "./img/fire.png";

interface IRoomDetailsProps {
  options: {
    noiseAbsorbingWalls: boolean,
    windowOnEveryBedroom: boolean,
    fireplace: boolean
  }
}

export default class RoomDetails extends React.Component<IRoomDetailsProps, {}> {

  constructor(props: IRoomDetailsProps) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div className="room-details">
        <ul className="room-details__list">
          {this.props.options.noiseAbsorbingWalls &&
            <li className="room-details__list-item">
              <img className="room-details__img" src={smilingEmoticon} alt="Улыбающийся смайл" />
              <div className="room-details__convenience">
                <p className="room-details__convenience-title">Комфорт</p>
                <p className="room-details__convenience-desc">Шумопоглощающие стены</p>
              </div>
            </li>}
          {this.props.options.windowOnEveryBedroom &&
            <li className="room-details__list-item">
              <img className="room-details__img" src={locationCity} alt="Город" />
              <div className="room-details__convenience">
                <p className="room-details__convenience-title">Удобства</p>
                <p className="room-details__convenience-desc">Окно в каждой из спален</p>
              </div>
            </li>}
          {this.props.options.fireplace &&
            <li className="room-details__list-item">
              <img className="room-details__img" src={fire} alt="Огонек" />
              <div className="room-details__convenience">
                <p className="room-details__convenience-title">Уют</p>
                <p className="room-details__convenience-desc">Номер оснащен камином</p>
              </div>
            </li>}
        </ul>
      </div>
    )
  }
}