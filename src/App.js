import React, { Component } from 'react';
import './App.css';
import CounterTwo from './components/CounterTwo';

class  App extends Component {
  render() {
    return (
      <div className="App">
        <CounterTwo 
        render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
        ) } 
      />

        <CounterTwo 
        render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        ) } 
      />
        {/* <ClickCounter2 />
        <HoverCounter2 />
        <User render ={(isLoggedIn) => isLoggedIn ? 'Azeez' : 'Guest' } /> */}
      </div>
    );
  }
}

export default App;
