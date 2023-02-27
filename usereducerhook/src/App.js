import React, {useReducer} from "react";


const ACTION_REDUCER = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_REDUCER.INCREMENT:
            return {count: state.count + 1};
        case ACTION_REDUCER.DECREMENT:
            return {count: state.count - 1};
        default:
            return state.hello;
    }
};


export default function App() {


    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        hello: "presses first button",
    });
    const increment = () => {
        dispatch({type: ACTION_REDUCER.INCREMENT});
    };
    const decrement = () => {
        dispatch({type: ACTION_REDUCER.DECREMENT});
    };

    return (
        <>
            <button onClick={increment}>+</button>
            {state.count === 0 ? state.hello : state.count}
            <button onClick={decrement}>-</button>
        </>
    );
};

