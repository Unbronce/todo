import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import Editor from "../Editor/Editor";
import Field from "../Field/Field";

import classes from "./TaskField.module.css";

const TaskField = (props) => {
  const [taskValue, setTaskValue] = useState("");
  const [field, setField] = useState(false);
  const [editedField, setEditedField] = useState(false);

  const editFieldHandler = () => {
    setField(true);
  };

  const setTaskValueHandler = (value) => {
    setTaskValue(value);
    setField(false);
    setEditedField(true);
  };

  const controls = (
    <div className={classes.Controls}>
      <Button clicked={props.showModal} btnType="Delete">
        Delete Task
      </Button>
      <Button clicked={editFieldHandler} btnType="Delete">
        Edit
      </Button>
    </div>
  );

  let taskField = (
    <>
      <Field info={props.info} />
      {controls}
    </>
  );

  if (field) {
    taskField = <Editor info={props.info} value={setTaskValueHandler} />;
  } else if (editedField) {
    taskField = (
      <>
        <Field info={taskValue} />
        {controls}
      </>
    );
  }

  return <>{taskField}</>;
};

export default TaskField;
