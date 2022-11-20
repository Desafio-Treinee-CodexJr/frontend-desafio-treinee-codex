import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./styles.css";
import api from "../../service"

function Home(props) {
    let [toDoItems, setToDoItems] = useState([]);
    let [newItem, setNewItem] = useState("");

    async function addNewItem() {
        const data = { text: newItem }
          
        const options = {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        const response = await api.post("/task", data, options );
        const tasks = response.data.tasks;
        setToDoItems(tasks);
        setNewItem("");
    };

    function handleSubmit(e) {
        e.preventDefault();
    };

    async function deleteItem(id) {
        const response = await api.delete("/task", {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            },
            data: { id: id }
        });
        const tasks = response.data.tasks;
        setToDoItems(tasks)
    }

    async function setList() {
        const response = await api.get(
            "/task",
            { headers: { "Content-Type": "application/json", "authorization": "Bearer " + localStorage.getItem("token") } },
        );
        setToDoItems(response.data.tasks);
    }

    useEffect(() => {
        setList();
    }, [])

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit} id="form">
                <input className="text-input" type="text" placeholder="Add uma tarefa" value={newItem} onChange={value => setNewItem(value.target.value)} />
                <button className="button" onClick={() => addNewItem()} >Add</button>
            </form>
            <ul id="todo-list">
                <h3>Lista:</h3>
                {toDoItems.map((task) => (
                    <li className="todo-task" key={task.id}>
                        {task.text}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" id="trash-icon" viewBox="0 0 16 16" onClick={() => deleteItem(task.id)}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;