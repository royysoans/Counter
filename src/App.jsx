import CounterFunc from './CounterFunc'
import CounterClass from './CounterClass'
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="counter-box">
        <CounterFunc />
      </div>
      <div className="counter-box">
        <CounterClass />
      </div>
    </div>
  )
}

export default App