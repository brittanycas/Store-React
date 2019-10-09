import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </div>
  );
}

export default App;
