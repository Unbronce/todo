import React, { useState, useCallback } from "react";

import Button from "../../../../components/UI/Button/Button";
import Modal from "../../../../components/UI/Modal/Modal";
import Warn from "../../../../components/UI/Warn/Warn";

const TodoListItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <li>
      {props.children}
      <Button clicked={showModalHandler} btnType="Delete">
        Delete Task
      </Button>
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
};

export default TodoListItem;
