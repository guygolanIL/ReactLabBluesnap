import React from "react";
import "./InvoiceCard.css";
class InvoiceCard extends React.Component {
    render(){
        return (
            <div className="invoice-card">
                <div><b>id: </b>{this.props.id}</div>
                <div><b>amount: </b>{this.props.amount}{this.props.currency}</div>
                <div><b>date created: </b>{this.props.dateCreated}</div>
                <div><b>account id: </b>{this.props.accountId}</div>

                <ul>
                    {this.props.contractCharges.map(contractCharge => <li key={contractCharge.id}>Contract Charge ID: {contractCharge.id}, Charge Amount: {contractCharge.chargeAmount}</li>)}
                </ul>
            </div>
        );
    }    
}

// usage: <InvoiceCard id="30112354" amount={15} accountId="3579513" currency="$" dateCreated={new Date().toString()} />
export default InvoiceCard;
