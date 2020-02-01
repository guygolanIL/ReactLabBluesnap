import React from 'react';
import "./InvoiceCard.css";
class InvoiceCard extends React.Component{

    render(){
        return (
            <div className="invoice-card">
                <div><b>Invoice Id: </b>{this.props.id}</div>
                <div><b>Amount: </b>{this.props.amount}{this.props.currency}</div>
                <div><b>Date Created: </b>{this.props.dateCreated}</div>
                <div><b>Account Id: </b>{this.props.accountId}</div>
            </div>
        );
    }
}
// usage: <InvoiceCard id="30112354" amount={15} accountId="3579513" currency="$" dateCreated={new Date().toString()} />
export default InvoiceCard;