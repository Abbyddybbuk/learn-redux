// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
       <h1>Hello World {counter}</h1>
       <button onClick={()=> dispatch(increment(5))}>+</button>
       <button onClick={()=> dispatch(decrement())}>-</button>
       {isLogged? <h3>Confidential Information</h3>: 'You aint logged in'}
       
    </div>
  );
}

export default App;
