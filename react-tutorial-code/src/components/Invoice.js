import React from 'react';
import "./Invoice.css";
class Invoice extends React.Component{

    render(){
        return (
            <div className="invoice-card">
                <div><b>Invoice Number: </b>{this.props.number}</div>
                <div><b>Date Created: </b>{this.props.dateCreated}</div>
            </div>
        );
    }
}

export default Invoice;