import React from 'react';
import logo from './logo.svg';
import CardList from './Components/CardList/CardList';
import './App.css';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
