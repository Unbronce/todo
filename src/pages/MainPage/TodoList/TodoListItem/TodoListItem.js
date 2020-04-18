import React, { useState, useCallback } from "react";

import TaskField from "../../TaskField/TaskField";
import Modal from "../../../../components/UI/Modal/Modal";
import Warn from "../../../../components/UI/Warn/Warn";

import classes from "./TodoListItem.module.css";

const TodoListItem = React.memo((props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <li className={classes.ListItem}>
      <TaskField info={props.children} showModal={showModalHandler} />
      <Modal show={showModal} modalClosed={closeModalHandler}>
        <Warn
          info="Are you sure you want to delete this task?"
          yes={() => {
            props.delete();
            setShowModal(false);
          }}
          no={closeModalHandler}
        />
      </Modal>
    </li>
  );
});

export default TodoListItem;
