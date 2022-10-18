import React, { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function UseReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      原组件内触发
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <Toolbar dispatch={dispatch}></Toolbar>
    </>
  );
}

function Toolbar(props:any) {
  return (
    <div>
      子组件内触发
      <button onClick={() => props.dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => props.dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}