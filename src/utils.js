// add a new todo item to the list
const addTodo = (todo) => {
    setTodos((currTodos) => {
        return [{ id: Date.now(), todo }, ...currTodos];
    });
};
// edit the current todo item in the list
const editTodo = (id, todo) => {
    setTodos((currTodos) => {
        currTodos.map((currTodo) => {
            return currTodo.id === id ? { ...todo } : { ...currTodo };
        });
    });
};
// delete a specific todo item in the list
const deleteTodo = (id) => {
    setTodos((currTodos) => {
        currTodos.filter((currTodo) => {
            return !(currTodo.id === id);
        });
    });
};
// toggle between complete and incomplete
const toggleComplete = (id) => {
    setTodos((currTodos) => {
        currTodos.map((currTodo) => {
            return currTodo.id === id
                ? { ...currTodo, isCompleted: !currTodo.isCompleted }
                : currTodo;
        });
    });
};

export { addTodo, editTodo, deleteTodo, toggleComplete };
