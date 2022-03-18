import React from "react";
import smilingEmoticon from "./img/smiling_emoticon.png";
// const smilingEmoticon = require("./img/smiling_emoticon.png")

export default class RoomDetails extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="room-details">
        <ul className="room-details__litst">
          <li className="room-details__litst-item">
            {/* {smilingEmoticon} */}
            <img src={smilingEmoticon} alt="" />
          </li>
        </ul>
      </div>
    )
  }
}