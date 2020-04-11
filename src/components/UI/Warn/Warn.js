import React from "react";

// import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../Button/Button";
import classes from "./Warn.module.css";

const Warn = (props) => (
  <>
    <p className={classes.Description}>{props.info}</p>
    <div className={classes.Wrapper}>
      <Button clicked={props.yes} btnType="Add">
        Yes
      </Button>
      <Button clicked={props.no} btnType="Delete">
        No
      </Button>
    </div>
  </>
);

export default Warn;
