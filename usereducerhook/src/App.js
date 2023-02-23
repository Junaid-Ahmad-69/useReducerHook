import React, { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state.hello;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    hello: "presses first button",
  });
  const increment = () => {
    dispatch({ type: "Increment" });
  };
  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <>
      <button onClick={increment}>+</button>
      {state.count === 0 ? state.hello : state.count}
      <button onClick={decrement}>-</button>
    </>
  );
};

export default App;
