import React, { useState } from "react";

import classes from "./Field.module.css";

const Field = (props) => {
  const [x, setX] = useState(false);

  let field = (
    <>
      <div style={{ display: "flex" }}>
        <input
          className={[classes.FieldHidden, classes.FieldCheckbox].join(" ")}
          type="checkbox"
          name={props.info}
          id={props.info}
          checked={x}
          onChange={() => setX(!x)}
        />
        <label
          className={classes.FieldLabel}
          style={{
            userSelect: "none",
            textDecorationLine: x ? "line-through" : "none",
          }}
          htmlFor={props.info}
        >
          {props.info}
        </label>
      </div>
    </>
  );

  return <>{field}</>;
};

export default Field;
