import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    constructor(props){
        super();
        this.state = {
            images: []
        };
    }

    onSearchSubmit = async (term) => {
      const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {
          query: term
        },
        headers: {
            Authorization: 'Client-ID 9d1c1457ecbf02ea628a5af1d508f48f25df0b4512c23cf4fc089c918f8cde9b'
        }
      });
      this.setState({
          images: response.data.results
      });
    };

    render(){
        return (
            <div className="container" style={{ marginTop: '10px'}}>
                <div className="row">
                    <SearchBar onUserSubmit={this.onSearchSubmit} />
                </div>
                <p className="text-center">
                    We found: {this.state.images.length} results
                </p>
            </div>
        );
    }
}


export default App;
