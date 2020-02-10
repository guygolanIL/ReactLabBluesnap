import React from "react";

export const InvoicesCurrencyFilter = props => (
    <div>
        <select
            onChange={e => {
                props.onSelected(e.target.value);
            }}
        >
            <option value="">ALL</option>
            <option value="USD">USD</option>
            <option value="ILS">ILS</option>
            <option value="EUR">EUR</option>
        </select>
    </div>
);
