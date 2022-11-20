import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./styles.css";
import api from "../../service"

function Home() {
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
        const response = await api.post("/task", data, options);
        const tasks = response.data.tasks;
        setToDoItems(tasks);
        setNewItem("");
    };

    function handleSubmit(e) {
        e.preventDefault();
    };

    async function changeTask(e, id) {
        let text = e.target.value;
        const response = await api.put("/task/text", { id: id, text: text }, {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        const tasks = response.data.tasks;
        setToDoItems(tasks);
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

    async function doTask(id) {
        const response = await api.put("/task", 
        {data: { id: id }},
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            },
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
                    <li className={task.done ? "task-done todo-task" : "todo-task"} key={task.id}>
                        <input id="task-input" defaultValue={task.text} onChange={(e) => changeTask(e, task.id)} ></input>
                        <svg onClick={() => doTask(task.id)} className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="icon" viewBox="0 0 16 16" onClick={() => deleteItem(task.id)}>
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