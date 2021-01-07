import React, { useRef } from 'react';
import Counter from './components/Counter'

import logo from './logo.svg';
import './App.css';

function App() {
  const couterRef = useRef()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter ref={couterRef} />
      </header>
      {/* 外部读取函数组件内的方法和变量 */}
      <button
        onClick={() => {
          const count = couterRef.current.getCount()
          console.log(count)
        }
      }>
        点击获取count
      </button>
    </div>
  );
}

export default App;
