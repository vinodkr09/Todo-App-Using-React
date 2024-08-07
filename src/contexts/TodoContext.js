import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},    // functinality defination is not defined here, it defined in app.jsx file
    updateTodo: (id, todo) => {},  // functinality defination is not defined here, it defined in app.jsx file
    deleteTodo: (id) => {},    //  functinality defination is not defined here, it defined in app.jsx file
    toggleComplete: (id) => {}  // functinality defination is not defined here, it defined in app.jsx file
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider