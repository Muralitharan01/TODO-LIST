import React, { useState } from "react";

const Todo = ({ task }) => {

  return (
    <div className="Todo">
      <p>{task.task}</p>
    </div>



  );


};
export default Todo;