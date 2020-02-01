import React from 'react';
import InvoiceCard from './components/Invoice';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <InvoiceCard number="3000002" amount={15} currency='$' dateCreated={new Date().toString()}></InvoiceCard>
    );
  }
}

export default App;
