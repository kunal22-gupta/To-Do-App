import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {id: "td-01", todo: "Watch anime", isCompleted: false}
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    editTodo: (id, todo) => {}
});

export function useTodo() {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;