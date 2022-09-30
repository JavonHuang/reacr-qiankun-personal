import {useEffect,useState} from 'react'
import useDIY from '../../utils/useDIY';
const Lifecycle = () => { 
  const [todos, dispatch] = useDIY(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => { 
    console.log("每次更新，包括第一次挂在载都会触发")
  })
  useEffect(() => { 
    console.log("首次挂载触发")
    return ()=>{ 
      console.log("销毁时清除")
    }
    
  }, [])
  useEffect(() => { 
    console.log(`监听count:${count},count2:${count2}, todos: ${todos}`)
  },[count,count2])

  const testclick = () => { 
    setCount(count + 1)
    setCount2(count2+1)
    dispatch(todos)
  }
  return <>
    <div>
      <p>You clicked {count} count</p>
      <p>You clicked {count2} count2</p>
      <p>You clicked {todos} todos</p>
      <button onClick={testclick}>
        Click me
      </button>
    </div>
  </>
}

export default Lifecycle