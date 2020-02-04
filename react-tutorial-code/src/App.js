import React from "react";
import "./App.css";
import InvoicesList from "./components/InvoicesList";
import InvoiceCard from "./components/InvoiceCard";

class App extends React.Component {

  state = {
    showInvoice: false
  };

  render() {
      return (

        <div>
          <button onClick={() => this.setState({ showInvoice: !this.state.showInvoice })}>Toggle hidden</button>
          {this.state.showInvoice ? <InvoiceCard id='123456' amount={15} currency="$" accountId="123" dateCreated={new Date().toString()}/> : "Hiding Invoice"}
        </div>
        
      );
  }
}

export default App;
