import { useTodo } from "../context/index.js";
import { useState } from "react";

export default function TodoForm() {
    const [todo, setTodo] = useState("");

    const {addTodo} = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo) return
        addTodo({todo: todo, isCompleted: false})
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <div className="container">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={todo}
                    placeholder="Add Todo..."
                    onChange={(e) => setTodo(e.target.value)}
                />
                <i className="ri-add-circle-line"></i>
            </div>
        </form>
    );
}
