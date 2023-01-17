import React, { useReducer } from 'react';

function reducer(state, action) {
  return { count: state.count + 1}
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0})

  function increment() {
    dispatch()
  };

  function decrement() {
    // setCount(prevCount - 1);
  };

  return(
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>

    
  )
};