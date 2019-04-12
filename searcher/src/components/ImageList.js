import React from 'react';



class ImagesList extends React.Component{
    constructor(props){
        super(props);
    }

    showInformation = () => {
        if (this.props.images.length > 0) {
            return (
                <p className="text-center">
                    {`We found ${this.props.total} results`}
                </p>
            );
        }
        else{
            return `No results`;
        }
    };

    showPictures = () => {
        if(this.props.images.length > 0){
            return(
                <div className="container">
                    <div className="row">
                        {this.props.images.map((pic,index) => {
                            return(
                                <div className="col-12 col-md-4" key={index}>
                                    <img className="img-fluid" src={pic.urls.regular} alt={pic.description == null ? "" : pic.description}  />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    };

    render(){
        return (
            <div className="text-center">
                {this.showInformation()}
                {this.showPictures()}
            </div>
        );
    }
}


export default ImagesList;