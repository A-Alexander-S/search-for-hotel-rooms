import React from "react";
import "./special-ofers.scss";

interface ISpecialOfersProps {
  title: string
}

export const SpecialOfers: React.FC<{ variables: ISpecialOfersProps }> = ({ variables }) => {
  const { title } = variables;
  return (
    <div className="special-ofers">
      {title && <div className="caption">
        {title}
      </div>}
      <div className="special-ofers__toggle">
        <input id="special-ofers__input" className="special-ofers__input" type="checkbox" />
        <label className="special-ofers__toggle-toggle" htmlFor="special-ofers__input"></label>
        <p className="special-ofers__desc"> Получать спецпредложения</p>
      </div>
    </div>
  )
}