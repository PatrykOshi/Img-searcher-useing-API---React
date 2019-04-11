import React from 'react';

class SearchBar extends React.Component{

    //  state = { term: ''};
    constructor(props){
        super();
        this.state = {
            term: ''
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onUserSubmit(this.state.term);
    };

    render() {
        return (
            <div className="col">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        className="form-control"
                        value={this.state.term}
                        placeholder="Type a text for search a image"
                        type="text"
                        onChange={
                            (e) => {
                                this.setState({
                                    term: e.target.value
                                });
                            }
                        }
                    />
                </form>
            </div>
        );
    }
}


export default SearchBar;