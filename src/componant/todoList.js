import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState("");
    const [task, setTask] = useState("");

    function addTodo(e) {
        e.preventDefault();
        let id = new Date().getTime();
        let todoText = task;
        setTodos([...todos, { id: id, text: todoText }]);
        console.log(todos);
        setTask("")
    };




    return (
        <div className="Todolist">

            <form className="Todoform" onSubmit={addTodo}>
                <input type="text" className="todo-input" placeholder="Enter the Todo's" value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button type="submit" className="todo-btn">Add Task</button>

            </form>
            {todos}
        </div>


    );
};
export default TodoList;