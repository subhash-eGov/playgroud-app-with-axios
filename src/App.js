import React from 'react';
import './App.css';
import SearchForm from "./components/SearchForm.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchForm/>
      </div>
    );
  }
}

export default App;
