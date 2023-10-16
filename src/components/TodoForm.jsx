import { useTodo } from "../context/index.js";
import { useState } from "react";
import "../css/TodoForm.css";

export default function TodoForm() {
    const [todo, setTodo] = useState("");

    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo: todo, isCompleted: false });
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <div className="container">
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
            </div>
        </form>
    );
}
