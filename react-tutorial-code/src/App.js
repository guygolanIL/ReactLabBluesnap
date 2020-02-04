import React from "react";
import "./App.css";
import InvoicesList from "./components/InvoicesList";
import InvoiceCard from "./components/InvoiceCard";

class App extends React.Component {
  render() {
      const contractCharges = [
        {
          id: 33251,
          chargeAmount: 7
        },
        {
          id: 33253,
          chargeAmount: 8
        }
      ];

      return (
        <div>
          <InvoiceCard 
            id='123456' 
            amount={15} 
            currency="$" 
            accountId="123" 
            dateCreated={new Date().toString()}
            contractCharges={contractCharges}
          />
        </div>
        
      );
  }
}

export default App;
