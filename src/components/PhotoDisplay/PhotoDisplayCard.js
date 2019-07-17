import React from 'react';

function PhotoDisplayCard (props) {

    return (
        <div className="img-card">
            <img src={props.url}></img>
            <h1>{props.title}</h1>
            <div className="attribution">
                <p className="date">{props.date}</p>
                <p className="copyright">{props.copyright}</p>
            </div>
            <p className="blurb">{props.blurb}</p>

        </div>
    )
}

export default PhotoDisplayCard