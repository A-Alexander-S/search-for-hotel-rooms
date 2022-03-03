import React, { Props } from "react";
import "./button.scss";

export interface IButtonProps {
  buttonOptions: {
    classButton: string,
    text?: string
  }
}

export class Button extends React.Component<IButtonProps> {

  constructor(props: IButtonProps) {
    super(props)
  }

  render(): React.ReactNode {
    const { classButton, text } = this.props.buttonOptions;

    const classBtn = `button ${classButton}`

    return (
      <button className={classBtn}>
        {text}
      </button >
    )
  }
}