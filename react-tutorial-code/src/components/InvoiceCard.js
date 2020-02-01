import React from "react";
import "./InvoiceCard.css";
const InvoiceCard = props => (
    <div className="invoice-card">
        <div><b>id: </b>{props.id}</div>
        <div><b>amount: </b>{props.amount}{props.currency}</div>
        <div><b>date created: </b>{props.dateCreated}</div>
        <div><b>account id: </b>{props.accountId}</div>
    </div>
);

// usage: <InvoiceCard id="30112354" amount={15} accountId="3579513" currency="$" dateCreated={new Date().toString()} />
export default InvoiceCard;
