import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoItem({ todo }) {
    const [isEditable, setIsEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.todo);

    const { editTodo, toggleComplete, deleteTodo } = useTodo();

    const handleEdit = () => {
        editTodo(todo.id, { ...todo, todo: todoText });
        setIsEditable(false);
    };
    const handleToggle = () => {
        toggleComplete(todo.id);
    };

    return (
        <div className="TodoItem">
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    checked={todo.isCompleted}
                    onChange={handleToggle}
                />
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={todoText}
                    readOnly={!isEditable}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button
                    disabled={todo.isCompleted}
                    onClick={() => {
                        if (todo.isCompleted) return;
                        if (isEditable) {
                            handleEdit();
                        } else {
                            setIsEditable((currVal) => !currVal);
                        }
                    }}
                >
                    <i className="ri-pencil-fill"></i>
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                    <i className="ri-delete-bin-6-fill"></i>
                </button>
                </form>
            </div>
        </div>
    );
}
