import React, {useState, useReducer} from 'react';
import TodoButton from "./TodoButton";


export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

const reducer = (todo, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return (
                [...todo, newTodo(action.payload.name)]
            )
        case ACTIONS.TOGGLE_TODO:
            return todo.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            });
        case ACTIONS.DELETE_TODO:
            return todo.filter(todo => todo.id !== action.payload.id)
        default:
            return todo;
    }

}
const newTodo = (name) => {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}


export default function Todo() {
    const [todo, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
        setName("")
    }
    const TodoData = todo.map((todo) => {
        return (
            <TodoButton key={todo.id} todo={todo} dispatch={dispatch}/>
        )
    });
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {TodoData}
        </>

    )
}


