import React from 'react';
import './text-field.scss'

interface ITextFieldProps {
  options: {
    title: string
  },
  children?: string
}

export default class TextField extends React.Component<ITextFieldProps> {

  constructor(props: ITextFieldProps) {
    super(props);
  }

  render(): React.ReactNode {
    const { title } = this.props.options
    return (
      <>
        <div className="text-field">
          <p className="text-field__title caption">{title}</p>
          <input type="text" className="text-field__input" placeholder={this.props.children} />
        </div>
      </>
    );
  }
}