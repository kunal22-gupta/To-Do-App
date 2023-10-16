import { useTodo } from "../context/index.js";
import { useState } from "react";
import "../css/TodoForm.css";

export default function TodoForm() {
    const [todo, setTodo] = useState("");

    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        // don't do anything if there is no input
        if (!todo) return;
        // add item in the list
        addTodo({ todo: todo, isCompleted: false });
        // reset the input field on submission
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
                <div className="wrapper">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        value={todo}
                        placeholder="Add Todo..."
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button>ADD</button>
                </div>
        </form>
    );
}
