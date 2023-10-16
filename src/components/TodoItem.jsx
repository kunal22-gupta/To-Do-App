import "../css/TodoItem.css";
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
    const handleToggle = (e) => {
        toggleComplete(todo.id);
        const todoText = e.target.nextSibling; // Select the todo input element
        e.target.checked
            ? todoText.classList.add("checked")
            : todoText.classList.remove("checked");
    };

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="TodoItem"
            id={`#${todo.id}`}
        >
            <div className="wrapper">
                <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    checked={todo.isCompleted}
                    onChange={handleToggle}
                />
                <input
                    className={todo.isCompleted && "checked"}
                    type="text"
                    name="todo"
                    id="todo"
                    value={todoText}
                    readOnly={!isEditable}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button
                    className="edit-btn"
                    disabled={todo.isCompleted}
                    onClick={(e) => {
                        if (todo.isCompleted) return;
                        if (isEditable) {
                            handleEdit();
                        } else {
                            // autofocus on input text
                            e.target.parentElement.previousSibling.focus()
                            setIsEditable((currVal) => !currVal);
                        }
                    }}
                >
                    <i className="ri-pencil-fill"></i>
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    <i className="ri-delete-bin-6-fill"></i>
                </button>
            </div>
        </form>
    );
}
