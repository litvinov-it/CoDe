import React from "react";
import classes from "./input.module.css";
import InputMask from "react-input-mask";

export const Input = ({ props, label, placeholder, mask }) => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={props.name}>
        {label}
      </label>
      <InputMask
        id={props.name}
        className={classes.input}
        placeholder={placeholder}
        mask={mask}
        alwaysShowMask={false}
        type={"text"}
        {...props}
      />
    </div>
  );
};
