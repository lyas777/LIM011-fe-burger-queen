import React from 'react';
import Header from './components/Header';
import Waiter from './components/waiter/Waiter';


function App() {
  return(
    <div data-testid = 'app'>
      <Header />
      <Waiter />
    </div>
  );
}


export default App;
