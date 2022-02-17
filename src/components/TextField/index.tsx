import React from 'react';
import './text-field.scss'

interface ITextFieldProps {
  title: string,
  placeholder: string,
}

export const TextField: React.FC<{ variables: ITextFieldProps }> = (props) => {
  const { title, placeholder } = props.variables
  return (
    <>
      <div className="text-field">
        <p className="text-field__title caption">{title}</p>
        <input type="text" className="text-field__input" placeholder={placeholder} />
      </div>
    </>
  );
}