import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "../../../components/UI/Button/Button";
import Card from "../../../components/UI/Card/Card";

import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const item = localStorage.getItem("item");
    if (item) {
      const arr = JSON.parse(localStorage.getItem("item")).concat({
        title: value,
        id: uuidv4(),
      });
      localStorage.setItem("item", JSON.stringify(arr));
    } else {
      localStorage.setItem(
        "item",
        JSON.stringify([{ title: value, id: uuidv4() }])
      );
    }
    const lsToArr = JSON.parse(localStorage.getItem("item"));
    console.log(lsToArr);
    props.addTask(lsToArr);
    setValue("");
  };

  return (
    <section className={classes.TaskForm}>
      <Card>
        <form>
          <div className={classes.TaskFormItem}>
            <label htmlFor="title">Task's name:</label>
            <input
              type="text"
              id="title"
              value={value}
              onChange={(event) => setValue(event.target.value)}
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
