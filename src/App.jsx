import "./App.css";
import { useEffect, useState } from "react";
import { TodoProvider } from "./context/index";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import logo from "./assests/images/logo.svg"

function App() {
    // Store the todos list data
    const [todos, setTodos] = useState([]);

    // add a new todo item to the list
    const addTodo = (todo) => {
        setTodos((currTodos) => {
            return [{ id: Date.now(), ...todo }, ...currTodos];
        });
    };
    // edit the current todo item in the list
    const editTodo = (id, todo) => {
        setTodos((currTodos) => {
            return currTodos.map((currTodo) => {
                return currTodo.id === id ? todo : currTodo;
            });
        });
    };
    // delete a specific todo item in the list
    const deleteTodo = (id) => {
        setTodos((currTodos) => {
            return currTodos.filter((currTodo) => {
                return currTodo.id !== id;
            });
        });
    };
    // toggle between complete and incomplete
    const toggleComplete = (id) => {
        setTodos((currTodos) => {
            return currTodos.map((currTodo) => {
                return currTodo.id === id
                    ? { ...currTodo, isCompleted: !currTodo.isCompleted }
                    : currTodo;
            });
        });
    };

    // Add local storage to preserve todo list on page reload/refresh
    useEffect(() => {
        // for the first render
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        // for every todos state re-render
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <main className="App">
        <div className="logo">
            <div className="container">
                <img src={logo} alt="logo" />
            </div>
        </div>
        <TodoProvider
            value={{ todos, addTodo, editTodo, deleteTodo, toggleComplete }}
        >
            <div className="container">
                <TodoForm />
            </div>

            <div className="container">
                <TodoList/>
            </div>
            
        </TodoProvider>
        </main>
    );
}

export default App;
