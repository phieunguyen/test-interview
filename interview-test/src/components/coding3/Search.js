import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch : ''
        };
    }

    onChange = (event) => {
        this.setState({
            txtSearch : event.target.value
        });
    }

    searchVideo = (data) => {
        console.log(this.state.txtSearch);
        let { item } = this.props;
        let result = [];
        if (this.state.txtSearch !== '') {
            item.map(element => {
                let name = element.name;
                if (name.indexOf(this.state.txtSearch) !== -1) {
                    result.push(element);
                }
            });
        }
        
        this.props.resultSearch(result);
    }

    render() {
        
        return (
            <div>
                <input 
                    type="text"
                    placeholder="search by name!"
                    className="videoSearch"
                    name="txtSearch"
                    value={this.state.txtSearch}
                    onChange={this.onChange}
                />
                <button
                    className="buttonSearch"
                    onClick={ () => this.searchVideo(this.state.txtSearch)}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default Search;
