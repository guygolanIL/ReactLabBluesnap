import React from 'react';
import Invoice from './components/Invoice';
import './App.css';

function App() {

  return (
    <Invoice number="3000002" dateCreated={new Date()}></Invoice>
  );
}

export default App;
