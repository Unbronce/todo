import React from "react";

import classes from "./InputText.module.css";

const InputText = (props) => {
  let input = null;
  if (props.id) {
    input = (
      <input
        type="text"
        id={props.id}
        value={props.value}
        onChange={props.changed}
      />
    );
  } else {
    input = <input type="text" value={props.value} onChange={props.changed} />;
  }
  return <div className={classes.InputText}>{input}</div>;
};

export default InputText;
