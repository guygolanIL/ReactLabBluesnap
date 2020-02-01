import React from "react";
import "./InvoiceCard.css";
const InvoiceCard = props => (
    <div className="invoice-card">
        <div><b>Invoice Id: </b>{props.id}</div>
        <div><b>Amount: </b>{props.amount}{props.currency}</div>
        <div><b>Date Created: </b>{props.dateCreated}</div>
        <div><b>Account Id: </b>{props.accountId}</div>
    </div>
);

// usage: <InvoiceCard id="30112354" amount={15} accountId="3579513" currency="$" dateCreated={new Date().toString()} />
export default InvoiceCard;
