import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { roomRulesAction, roomRulesType } from "../../actions/filterRoomsActions";
import "./rules-room.scss";

interface IRulesRoomProps {
  options: {
    title: string
  },
  smoke: boolean,
  pets: boolean,
  guests: boolean,
  roomRulesAction: (smoke: boolean, pets: boolean, guests: boolean) => roomRulesType
}

class RulesRoom extends React.Component<IRulesRoomProps> {

  constructor(props: IRulesRoomProps) {
    super(props);
  }

  handleClickLabel = (e: React.MouseEvent<HTMLLabelElement>) => {
    const { smoke, pets, guests } = this.props;
    if (e.currentTarget.hasAttribute('data-smoke')) {
      this.props.roomRulesAction(!smoke, pets, pets);
    } else if (e.currentTarget.hasAttribute('data-pets')) {
      this.props.roomRulesAction(smoke, !pets, guests);
    } else if (e.currentTarget.hasAttribute('data-guests')) {
      this.props.roomRulesAction(smoke, pets, !guests);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="rules-room">
        <p className="rules-room__caption">{this.props.options.title}</p>
        <ul className="rules-room__list">
          <li
            className="rules-room__list-item">
            <input
              id="smoke"
              className="rules-room__checkbox"
              name="smoke"
              value={"yes"}
              type="checkbox" />
            <label
              className="rules-room__label"
              data-smoke
              htmlFor="smoke"
              onClick={this.handleClickLabel}>
              <p className="rules-room__text">Можно курить</p>
            </label>
          </li>
          <li className="rules-room__list-item">
            <input
              id="pets"
              className="rules-room__checkbox"
              name="pets"
              value={"yes"}
              type="checkbox" />
            <label
              className="rules-room__label"
              data-pets
              htmlFor="pets"
              onClick={this.handleClickLabel}>
              <p className="rules-room__text">Можно с питомцами</p>
            </label>
          </li>
          <li className="rules-room__list-item">
            <input
              id="guests"
              className="rules-room__checkbox"
              name="guests"
              value={"yes"}
              type="checkbox" />
            <label
              className="rules-room__label"
              data-guests
              htmlFor="guests"
              onClick={this.handleClickLabel}>
              <p className="rules-room__text">Можно пригласить гостей (до 10 человек)</p>
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  smoke: store.filteredRoomsReducer.smoke,
  pets: store.filteredRoomsReducer.pets,
  guests: store.filteredRoomsReducer.guests,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  roomRulesAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RulesRoom);