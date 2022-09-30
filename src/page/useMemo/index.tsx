import React, { useState,useMemo,useEffect} from 'react'

export default function App() {
  let [count, setConut] = useState(0);
  let [name, setName] = useState<string>('Javon');
  const testclick = () => { 
    setConut(++count)
  }
  const testName= () => { 
    setName(`Javon(${count})`)
  }
  return <>
    <div>
      <div>
      它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
      </div>
      <button onClick={testclick}>
        count({ count})
      </button>
      <button onClick={testName}>
        name({ name})
      </button>
      <Child count={count} name={ name} ></Child>
    </div>
  </>
}

const Child = (props: any) => {

	const getRichChild = () => {
		console.log('rich child');
		return 'Child依赖name：'+props.count;
	}
 
  const richChild = useMemo(() => {

		//执行相应的函数
		return getRichChild();
	}, [props.name]);
 
	return (
		<div>
			Child每次更新: {props.count}<br />
      {richChild}
		</div>
	);
}