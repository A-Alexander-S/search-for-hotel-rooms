import React from "react";
import "./permissions-checkbox.scss";

export const PermissionsCheckbox: React.FC = () => {
  return (
    <div className="permissions-checkbox">
      <p className="caption">Checkbox Buttons</p>
      <label className="permissions-checkbox__label" htmlFor="smoke">
        <input id="smoke" className="permissions-checkbox__input" name="smoke" type="checkbox" />
        <p><span>Можно курить</span></p>
      </label>
      <label className="permissions-checkbox__label" htmlFor="pets">
        <input id="pets" className="permissions-checkbox__input" name="pets" type="checkbox" />
        <p><span>Можно с питомцами</span></p>
      </label>
      <label className="permissions-checkbox__label" htmlFor="guests">
        <input id="guests" className="permissions-checkbox__input" name="guests" type="checkbox" />
        <p><span>Можно пригласить гостей (до 10 человек)</span></p>
      </label>
    </div>
  )
}