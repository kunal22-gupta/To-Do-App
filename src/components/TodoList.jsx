import "../css/TodoList.css";
import TodoItem from "./TodoItem";
import { useTodo } from "../context";
export default function TodoList() {
    const { todos } = useTodo();
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id}/>
            ))}
        </div>
    );
}
