import {useEffect,useState} from 'react'
const Lifecycle = () => {
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
    console.log(`监听count:${count},count2:${count2}`)
  },[count,count2])

  const testclick = () => { 
    setCount(count + 1)
    setCount2(count2+1)
  }
  return <>
    <div>
      <p>You clicked {count} count</p>
      <p>You clicked {count2} count2</p>
      <p>1、每次更新，包括第一次挂在载都会触发</p>
      <p>2、首次挂载触发</p>
      <p>3、销毁时清除</p>
      <button onClick={testclick}>
        Click me
      </button>
    </div>
  </>
}

export default Lifecycle