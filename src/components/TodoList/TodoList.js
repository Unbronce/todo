import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import Warn from "../UI/Warn/Warn";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <section className={classes.TodoList}>
      <Card>
        <h2>My Todo</h2>
        <ul>
          {props.tasks.map((task) => (
            <li key={uuidv4()}>
              {task.title}
              {/* <Button
                clicked={() => props.deleteTask(task.id)}
                btnType="Delete"
              >
                Del task
              </Button> */}
              <Button clicked={showModalHandler} btnType="Delete">
                Del task
              </Button>
              <Modal show={showModal} modalClosed={closeModalHandler}>
                <Warn
                  info="Are you sure you want to delete this task?"
                  yes={() => {
                    props.deleteTask(task.id);
                    setShowModal(false);
                  }}
                  no={closeModalHandler}
                />
              </Modal>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default TodoList;
