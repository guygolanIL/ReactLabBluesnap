import React from 'react';
import "./Invoice.css";
class InvoiceCard extends React.Component{

    render(){
        return (
            <div className="invoice-card">
                <div><b>Invoice Number: </b>{this.props.number}</div>
                <div><b>Amount: </b>{this.props.amount}{this.props.currency}</div>
                <div><b>Date Created: </b>{this.props.dateCreated}</div>
            </div>
        );
    }
}
// usage: <InvoiceCard number="30112354" amount={15} currency="$" dateCreated={new Date().toString()} />
export default InvoiceCard;