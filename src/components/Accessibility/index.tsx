import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { choiceOfAvailabilityAction, choiceOfAvailabilityType } from "../../actions/filterRoomsActions";
import "./accessibility.scss";

interface IAccessibilityProps {
  options: {
    title: string
  },
  wideCorridor: true | undefined,
  assistant: true | undefined,
  choiceOfAvailabilityAction: (
    wideCorridor: true | undefined,
    assistant: true | undefined
  ) => choiceOfAvailabilityType
}

class Accessibility extends React.Component<IAccessibilityProps> {
  constructor(props: IAccessibilityProps) {
    super(props);
  }

  /**
   * Sent to store input checked or no
  */
  handleClickLabel = (e: React.MouseEvent<HTMLLabelElement>) => {
    const { wideCorridor, assistant, choiceOfAvailabilityAction } = this.props;

    if (e.currentTarget.hasAttribute('data-wide-corridor')) {
      choiceOfAvailabilityAction(wideCorridor ? undefined : true, assistant);
    } else if (e.currentTarget.hasAttribute('data-assistant-for-disabled')) {
      choiceOfAvailabilityAction(wideCorridor, assistant ? undefined : true);
    }
  }

  render(): React.ReactNode {
    const { title } = this.props.options;
    return (
      <div className="accessibility">
        <p className="accessibility__caption">{title}</p>
        <ul className="accessibility__list">
          <li className="accessibility__item">
            <input
              id="wide-corridor"
              className="accessibility__checkbox"
              type="checkbox"
              name="wide-corridor" />
            <label
              className="accessibility__label"
              htmlFor="wide-corridor"
              data-wide-corridor
              onClick={this.handleClickLabel}>
              <div className="accessibility__label-desc">
                <p className="accessibility__label-subtitle">Широкий коридор</p>
                <p className="accessibility__label-text">Ширина коридоров в номере не менее 91 см.</p>
              </div>
            </label>
          </li>
          <li className="accessibility__item">
            <input
              id="assistant-for-disabled"
              className="accessibility__checkbox"
              type="checkbox"
              name="assistant-for-disabled" />
            <label
              className="accessibility__label"
              htmlFor="assistant-for-disabled"
              data-assistant-for-disabled
              onClick={this.handleClickLabel}>
              <div className="accessibility__label-desc">
                <p className="accessibility__label-subtitle">Помощник для инвалидов</p>
                <p className="accessibility__label-text">На 1 этаже вас встретит специалист  и проводит до номера.</p>
              </div>
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  wideCorridor: store.filteredRoomsReducer.wideCorridor,
  assistant: store.filteredRoomsReducer.assistant
});

const mapDispatchToProps = dispatch => bindActionCreators({
  choiceOfAvailabilityAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Accessibility);