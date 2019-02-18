import React, { Component } from 'react';
import './App.css';
import CodingLevel2 from './components/CodingLevel2';
import CodingLevel3 from './components/coding3/CodingLevel3';
import CodingLevel1 from './components/CodingLevel1';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
    }

    componentWillMount() {
        this.codingLevelQuestion1();
    }

    codingLevelQuestion1 = async () => {
        const options = {
            'method': 'GET',
            'Content-Type': 'application/json'
        }
        let res = await fetch('https://xbot.com.vn/test/standards.json', options)
        
        if (res) {
            let data = await res.json();
            this.setState({
                data: data
            });
        }
    }

  render() {
    return (

        <div>
            <div>
                <CodingLevel1 />
            </div>

            <div>
                <CodingLevel2 arrData={this.state.data} />
            </div>
            
            <div>
                <CodingLevel3 />
            </div>
        </div>
        
        
    );
  }
}

export default App;
