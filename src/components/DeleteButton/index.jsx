/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import TaskContext from '../../context/TaskContext';

function DeleteButton({ props }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <button
      type="button"
      onClick={async () => deleteTask(props)}
    >
      <BsFillTrashFill style={{ color: 'red' }} />
    </button>
  );
}

export default DeleteButton;
