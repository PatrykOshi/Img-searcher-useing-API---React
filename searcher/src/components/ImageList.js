import React from 'react';



const ImagesList = (props) => {

    let showInformation = () => {
        if (props.images.length > 0) {
            return (
                <p className="text-center">
                    {`We found ${props.total} results`}
                </p>
            );
        }
        else{
            return `No results`;
        }
    };

    const showPictures = () => {
        if(props.images.length > 0){
            return(
                <div className="container">
                    <div className="row">
                        {props.images.map((pic,index) => {
                            return(
                                <div className="col-12 col-md-4" key={index}>
                                    <img className="img-fluid" src={pic.urls.regular} alt=""  />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    };

    return (
      <div className="text-center">
          {showInformation()}
          {showPictures()}
      </div>
    );
};


export default ImagesList;