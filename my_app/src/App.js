import React, { Component } from 'react';
import Input from './components/Input';
import './index.css';
import Display from './components/Display';

class App extends Component {

  state = {
    amount: '',
    duration: '',
    output: {
      interestRate: '',
      monthlyPayment: ''
    }
  };

  onAmountChangeHandler = (event) => {
    let target = event.target;
    this.setState({ amount: target.value });
    if (target.value > 5000 || target.value < 500) {
      this.setState({
        output: {
          interestRate: '',
          monthlyPayment: '',
        }
      })
    }
  };

  onChangeHandler = (event) => {
    let target = event.target;
    this.setState({ amount: target.value });
    if (target.value > 5000 || target.value < 500) {
      this.setState({
        output: {
          interestRate: '',
          monthlyPayment: '',
        }
      })
    }

    if (this.state.duration && this.state.amount) {
      const url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.duration}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            output: {
              interestRate: data.interestRate,
              monthlyPayment: data.monthlyPayment.amount
            }

          });
        })
        .catch((error) => console.log(error));
    }
  };

  onDurationChangeHandler = (event) => {
    let target = event.target;
    this.setState({ duration: target.value })
    if (target.value > 5000 || target.value < 500) {
      this.setState({
        output: {
          monthlyPayment: '',
          interestRate: '',
        }
      })
    }
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.duration}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          output: {
            interestRate: data.interestRate,
            monthlyPayment: data.monthlyPayment.amount
          }
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="container box">
        <Input
          amount={this.state.amount}
          duration={this.state.duration}
          onChangeHandler={this.onChangeHandler}
          onAmountChangeHandler={this.onAmountChangeHandler}
          onDurationChangeHandler={this.onDurationChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          output={this.state.output} />
          <Display output={this.state.output} />
      </div>
    );
  }
}

export default App;
