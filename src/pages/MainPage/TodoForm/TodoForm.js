import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "../../../components/UI/Button/Button";
import InputText from "../../../components/UI/InputText/InputText";
import Card from "../../../components/UI/Card/Card";

import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTask({ title: value, id: uuidv4() });
    setValue("");
  };

  return (
    <section className={classes.TaskForm}>
      <Card>
        <form>
          <div className={classes.TaskFormItem}>
            <label htmlFor="title">Task's name:</label>
            <InputText
              id="title"
              value={value}
              changed={(event) => setValue(event.target.value)}
            />
          </div>
          <Button clicked={submitHandler} btnType="Add">
            Add task
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default TodoForm;
