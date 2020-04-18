import React, { useState } from "react";

const Field = (props) => {
  const [x, setX] = useState(false);

  let field = (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          name={props.info}
          id={props.info}
          checked={x}
          onChange={() => setX(!x)}
        />
        <label
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
