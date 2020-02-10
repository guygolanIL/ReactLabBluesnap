import React from "react";
import "./InvoicesList.css";
import InvoiceCard from "./InvoiceCard";
import { InvoicesCurrencyFilter } from "./InvoicesCurrencyFilter";

class InvoicesList extends React.Component {
    state = {
        currency: "",
        invoices: [
            {
                id: "3216547",
                accountId: "264578",
                amount: 6,
                currency: "USD",
                dateCreated: new Date()
            },
            {
                id: "3216513",
                accountId: "264512",
                amount: 10,
                currency: "USD",
                dateCreated: new Date()
            },
            {
                id: "3216123",
                accountId: "264578",
                amount: 12,
                currency: "ILS",
                dateCreated: new Date()
            }
        ]
    };

    render() {
        let filteredInvoices = this.state.invoices;

        if (this.state.currency) {
            filteredInvoices = filteredInvoices.filter(
                invoice => invoice.currency === this.state.currency
            );
        }

        filteredInvoices = filteredInvoices.map(invoice => (
            <InvoiceCard
                key={invoice.id}
                id={invoice.id}
                accountId={invoice.accountId}
                amount={invoice.amount}
                currency={invoice.currency}
                dateCreated={invoice.dateCreated.toString()}
            />
        ));

        return (
            <div className="InvoicesList">
                <InvoicesCurrencyFilter
                    onSelected={currency => {
                        this.setState({ currency: currency });
                    }}
                />
                {filteredInvoices}
            </div>
        );
    }
}

export default InvoicesList;
