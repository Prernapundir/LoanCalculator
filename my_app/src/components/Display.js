import React, { Component } from 'react';
import '../index.css';

class Display extends Component {

    render() {
        return (
            <div className="container box2">
                <div className="header">
                    <h5>Calulated InterestRate and Monthly Payment</h5>
                </div>
                <form className="ui form" >
                    <div className="field">
                        <label><h5>Interest Rate</h5></label>
                        <input readOnly type="text" name="InterestRate" style={{ width: '400px' }} value={this.props.output.interestRate} placeholder=" Interest Rate"  ></input>
                    </div>
                    <div className="field">
                        <label><h5>Monthly Payment</h5></label>
                        <input readOnly type="text" name="monthlyPayment" style={{ width: '400px' }} value={`$${this.props.output.monthlyPayment}`} placeholder="Monthly Payment" ></input>
                    </div>
                </form>
            </div>
        )
    }
};

export default Display;