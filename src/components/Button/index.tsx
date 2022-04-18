import React from "react";
import "./button.scss";

export interface IButtonProps {
  options: {
    classButton: string,
    text: string
    width?: string,
    height?: string,
    img?: boolean
  },
  onClick?: Function
}

export default class Button extends React.Component<IButtonProps> {

  constructor(props: IButtonProps) {
    super(props)
  }

  handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.props.onClick !== undefined) {
      this.props.onClick(e)
    }
  }

  render(): React.ReactNode {
    const { classButton, width, height, text, img } = this.props.options;

    const classBtn = `button ${classButton}`

    return (
      <button
        className={classBtn}
        style={{ width: width, height: height }}
        onClick={this.handleClickButton}
      >
        {text}
        {img && <svg className="arrow-forward-white" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="white" />
        </svg>}
      </button >
    )
  }
}