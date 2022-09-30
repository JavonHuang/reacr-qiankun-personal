import {useState } from 'react'

export default function useDIY (initialState: number): [number,  (action: number) => void]  { 
  const [state, setState] = useState(initialState);

  function  dispatch(action: number):void {
    setState(action+1);
  }

  return [state, dispatch];
}