import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./styles.css";
import api from "../../service"

function Home(props) {
    let [toDoItems, setToDoItems] = useState([]);
    let [newItem, setNewItem] = useState("");

    function addNewItem() {
        setToDoItems([...toDoItems, newItem]);
        setNewItem("");
    };

    
    function handleSubmit(e) {
        e.preventDefault();
    };
    
    function deletItem(index) {
        let tmpToDoItems = [...toDoItems];
        tmpToDoItems.splice(index, 1)
        setToDoItems(tmpToDoItems)
    }

    function populateToDoItems(task) {
        setToDoItems([...toDoItems, task]);
        console.log(toDoItems)  
    }
    
    async function setList() {
        await api.get(
            "/task",
            { headers: { "Content-Type": "application/json", "authorization": "Bearer " + localStorage.getItem("token") } },
        )
            .then((response) => {
                const tasks = response.data.tasks;
                populateToDoItems(tasks)
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    useEffect(() => {
        setList()
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
                {toDoItems.map((task, index) => (
                    <li className="todo-task" key={task[index].id}>
                        {task[index].text + ' ' + task[index].id}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" id="trash-icon" viewBox="0 0 16 16" onClick={() => deletItem(task[index].id)}>
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