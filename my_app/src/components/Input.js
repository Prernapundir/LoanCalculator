import React, { Component } from 'react';

class Input extends Component {

    render() {
        return (
            <div className="container box1">
            <div className="header">
            <h5>Fill the amount in $ and duration of loan in months</h5>
            </div>
                <form className="ui form" onSubmit={this.props.onSubmitHandler}>
                    <div className="field">
                        <label><h5>Amount</h5></label>
                        <input  type="number" name="amount" min={500} step="50" max={5000} style={{ width: '400px' }} value={this.props.amount} placeholder="Enter Amount" onChange={this.props.onAmountChangeHandler} ></input>
                    </div>
                    <div className="field">                             
                        <input type="range" className="custom-range" name="amount" min={500} step="50" max={5000} style={{ width: '400px' }} value={this.props.amount} placeholder="Enter Amount" onChange={this.props.onChangeHandler} ></input>
                    </div>
                    <div className="field">
                        <label><h5>Duration</h5></label>
                        <input type="number" name="duration" min="6" max="24" style={{ width: '400px' }} value={this.props.duration} placeholder="Enter Duration" onChange={this.props.onDurationChangeHandler}></input>
                    </div>
                    <div className="field" >
                    <button type="submit" className="ui primary button" value="Submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default Input;


