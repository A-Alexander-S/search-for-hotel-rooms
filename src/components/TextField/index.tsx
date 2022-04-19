import React from 'react';
import './text-field.scss'

type TPropsAttributeTypeInput = "text" | "email" | "password" | "date";
type TPropsAttributeNameInput = "name" | "surname" | "email" | "password" | "DateOfBirth";

interface ITextFieldProps {
  options: {
    type: TPropsAttributeTypeInput,
    name: TPropsAttributeNameInput,
  }
  children?: string
}

export default class TextField extends React.Component<ITextFieldProps> {

  constructor(props: ITextFieldProps) {
    super(props);
  }

  render(): React.ReactNode {
    const { type, name } = this.props.options
    return (
      <>
        <div className="text-field">
          <input
            type={type}
            className="text-field__input"
            name={name}
            placeholder={this.props.children}
            required />
        </div>
      </>
    );
  }
}