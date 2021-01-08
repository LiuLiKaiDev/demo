import React, { useRef } from 'react';
import Counter from './components/Counter'

import logo from './logo.svg';
import './App.css';

function App() {
  const couterRef = useRef()
  return (
    <div className="App">
      <div style={{ padding: 10 }}>
        <Counter ref={couterRef} />
      </div>
      <div>
        {/* 外部读取函数组件内的方法和变量 */}
        <button
          onClick={() => {
            // const count = couterRef.current.getCount()
            // console.log(count)
            couterRef.current.setCount(0)
          }
        }>
          将count设置为0
        </button>
      </div>
    </div>
  );
}

export default App;
