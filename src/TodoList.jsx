import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import { useState } from "react";

const initialTodos = [
    { id: 0, text: "watch One Piece", completed: false },
    { id: 1, text: "watch SpyxFamily", completed: false },
    { id: 2, text: "watch Jujutsu Kaisen", completed: true },
    { id: 3, text: "watch Made in Abyss", completed: true },
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState({
        id: 4,
        text: "",
        completed: false,
    });

    // Remove an item from todo list
    const removeTodo = (id) => {
        setTodos((currTodos) => {
            return currTodos.filter((todo) => todo.id !== id);
        });
    };

    // Toggle when item is checked and unchecked
    const toggleCheck = (id) => {
        setTodos((currTodos) => {
            return currTodos.map((todo) => {
                if (id === todo.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };

    // Sync the input field
    const handleChange = (e) => {
        setNewTodo((currItem) => {
            return { ...currItem, text: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((currTodos) => {
            return [...currTodos, newTodo];
        });
        setNewTodo({ id: newTodo.id + 1, text: "", completed: false });
    };
    return (
        <Container maxWidth="sm">
            <h1>Todo List</h1>
            <Box>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {todos.map((item) => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            removeTodo={removeTodo}
                            toggleCheck={toggleCheck}
                        />
                    ))}
                    <TodoForm
                    text={newTodo.text}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                </List>
            </Box>
        </Container>
    );
}
