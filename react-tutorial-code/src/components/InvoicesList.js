import React from "react";
import "./InvoicesList.css";
import InvoiceCard from "./InvoiceCard";
class InvoicesList extends React.Component {
    state = {
      loadingData: false,
      invoices: []
    };

    componentDidMount(){
      this.fetchInvoices();
    }

    fetchInvoices(){
      this.setState({
        loadingData: true
      });
      
      setTimeout(() => {
        console.log('fetching data');
        this.setState({
          loadingData: false,
          invoices: [
            {
                id: "3216547",
                accountId: "264578",
                amount: 6,
                currency: "USD",
                dateCreated: new Date()
            },
            {
                id: "3216123",
                accountId: "264578",
                amount: 12,
                currency: "ILS",
                dateCreated: new Date()
            },
            {
                id: "3214789",
                accountId: "264551",
                amount: 1,
                currency: "EUR",
                dateCreated: new Date()
            }
          ]
        });
      }, 1500);
    }

    getInvoicesCards() {
        return this.state.invoices.map(invoice => (
            <InvoiceCard
                key={invoice.id}
                id={invoice.id}
                accountId={invoice.accountId}
                amount={invoice.amount}
                currency={invoice.currency}
                dateCreated={invoice.dateCreated.toString()}
            />
        ));
    }

    render() {
        return (
            <div className="InvoicesList">
                <h1 
                  style={{
                    textAlign: "center"
                  }}
                >
                    Invoices
                </h1>
                {this.state.loadingData ? 'Loading...' : null}
                {this.getInvoicesCards()}
            </div>
        );
    }
}

export default InvoicesList;
