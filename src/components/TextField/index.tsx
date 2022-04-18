import React from 'react';
import './text-field.scss'

interface ITextFieldProps {
  children?: string
}

export default class TextField extends React.Component<ITextFieldProps> {

  constructor(props: ITextFieldProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <div className="text-field">
          <input type="text" className="text-field__input" placeholder={this.props.children} />
        </div>
      </>
    );
  }
}