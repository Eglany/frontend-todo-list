import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

function DeleteButton() {
  return (
    <div type="button"><BsFillTrashFill style={{ color: 'red' }} /></div>
  );
}

export default DeleteButton;
