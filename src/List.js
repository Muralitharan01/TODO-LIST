import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';

const List = () => {
    const [todo, setTodos] = useState([]);
    const [name, setName] = useState('');
    const [update, setUpdate] = useState();

    const addTodo = () => {
        if (name.trim() !== '') {
            if (update !== "") {
                const upto = [...todo];
                upto[update] = { name: name };
                setTodos(upto)
                setUpdate("")
            }

            else {
                setTodos([...todo, { name: name }])
            };
            setName("")
        }

        else {
            alert("Enter Your Task")
        };
    };

    const removeTodo = (index) => {
        const remove = [...todo];
        remove.splice(index, 1);
        setTodos(remove);
        setUpdate(null);
    };

    const updateTodo = (index) => {
        const todolistup = todo[index];
        setName(todolistup.name);
        setUpdate(index);
        console.log(todolistup.name);
    };

    return (
        <div className='background'>
            <div className='inputbox'>
                <input type="text" name="name" placeholder='Enter Your Task'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button type='submit'
                    onClick={addTodo} >Add Todo</button>
            </div>


            <table className="detaile table">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((todo, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td className='todos'>{todo.name}</td>
                            <td>
                                <button icon="fa-solid fa-trash" className="btn_btn-remove" onClick={() => removeTodo(index)}>REMOVE</button>
                                <button className="btn_btn-edit" onClick={() => updateTodo(index)}>EDIT</button></td>
                        </tr>
                    ))};
                </tbody>
            </table>

        </div>
    );
};

export default List;