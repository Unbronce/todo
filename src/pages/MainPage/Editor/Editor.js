import React, { useState, useCallback } from "react";

import Button from "../../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/actions";
const Editor = (props) => {
  const [taskValue, setTaskValue] = useState(props.info);

  const dispatch = useDispatch();

  const onChangeTask = useCallback(
    (currentValue, newValue) =>
      dispatch(actions.changeTask(currentValue, newValue)),
    [dispatch]
  );

  const editedFieldHandler = () => {
    props.value(taskValue);
    onChangeTask(props.info, taskValue);
  };

  return (
    <>
      <input
        type="text"
        value={taskValue}
        onChange={(event) => {
          setTaskValue(event.target.value);
        }}
      />
      <Button clicked={editedFieldHandler} btnType="Delete">
        Save
      </Button>
    </>
  );
};

export default Editor;
