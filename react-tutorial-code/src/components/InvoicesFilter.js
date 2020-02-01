import React from "react";

export class InvoicesFilter extends React.Component {
    state = {
        keyToFilterBy: "",
        valueToFilterBy: ""
    };

    fieldChangedHandler(e) {
        this.setState({
            keyToFilterBy: e.target.value
        });
    }

    valueChangedHandler(e) {
        this.setState({
            valueToFilterBy: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Key to filter by"
                    value={this.state.keyToFilterBy}
                    onChange={this.fieldChangedHandler.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Value to filter by"
                    value={this.state.valueToFilterBy}
                    onChange={this.valueChangedHandler.bind(this)}
                />
                <button
                    onClick={() => {
                        this.props.onFilter({
                            key: this.state.keyToFilterBy,
                            value: this.state.valueToFilterBy
                        });
                    }}
                >
                    Apply
                </button>
                <button
                    onClick={() => {
                        this.props.onResetFilters();
                        this.setState({
                            keyToFilterBy: '',
                            valueToFilterBy: ''
                        })
                    }}
                >
                    Reset
                </button>
            </div>
        );
    }
}
