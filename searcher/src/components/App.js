import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            images: [],
            total: null
        };
    }

    onSearchSubmit = async (term) => {
      const response = await unsplash.get('/search/photos',{
        params: { query: term }
      });
      this.setState({
          images: response.data.results,
          total: response.data.total
      });
    };

    render(){
        return (
            <div className="container" style={{ marginTop: '10px'}}>
                <div className="row">
                    <SearchBar onUserSubmit={this.onSearchSubmit} />
                </div>
                <ImageList images={this.state.images} total={this.state.total}/>
            </div>
        );
    }
}


export default App;
