import useDIY from '../../utils/useDIY';

const UseDiy = () => {
  const [todos, setTodos] = useDIY(0);

  const testclick = () => { 
    setTodos(todos)
  }

  return <>
    <div>
      <p>You clicked {todos} todos</p>
      <button onClick={testclick}>
        Click me
      </button>
    </div>
  </>
}
 
export default UseDiy;