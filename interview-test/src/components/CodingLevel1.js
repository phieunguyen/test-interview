import React, { Component } from 'react';

class CondingLevel1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total : '',
            txtNumber : '',
            result : ''
        };
    }

    componentWillMount() {
        this.sumArray();
    }

    sumArray() {
        let arr = [1, 3, 5, 7, 9];
        let result = 0;
        arr.forEach(element => {
            // console.log(element);
            result = result + element;
        });
        this.setState({
            total : result
        });
    }

    fibonacci(num) {
        let result;
        if (num == 1 || num == 2) {
            return result = 1;
        }
        result = this.fibonacci(num - 1) + this.fibonacci(num - 2);
        return result;
    }

    calculateFibo() {
        if (!isNaN(this.state.txtNumber) && this.state.txtNumber > 0) {
            const num = this.state.txtNumber;
            alert(this.fibonacci(num));
        } else {
            alert('must not be empty and must be a number greater than 0');
        }
    }

    onChange = (event) => {
        this.setState({
            txtNumber : event.target.value
        });
    }
  render() {
    return (

        <div className="ml-15">
            <p>coding 1: calculate the sum of array of integers.</p>
            <p>input array : [1, 3, 5, 7, 9]</p>
            <p>sum = {this.state.total}</p>
            <hr />
            <p>coding 1 - question 2: calculate the Nth number of the Fibonacci series.</p>
            <input
                type="text"
                name="txtNumber" 
                value={this.state.txtNumber}
                onChange={this.onChange}
            />
            <button onClick={() => this.calculateFibo(this.state.txtNumber)}>calculate</button>
        </div>
        
        
    );
  }
}

export default CondingLevel1;
