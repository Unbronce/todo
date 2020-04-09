import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../Button/Button";
import classes from "./Warn.module.css";

const Warn = (props) => (
  <Aux>
    <p>{props.info}</p>
    <Button clicked={props.yes} btnType="Add">
      Yes
    </Button>
    <Button clicked={props.no} btnType="Delete">
      No
    </Button>
  </Aux>
);

export default Warn;
