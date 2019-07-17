import React from 'react';
import PhotoDisplayCard from './PhotoDisplayCard';

function PhotoDisplayContainer (props) {

    return (
        <div className="photo-grid">
            {props.pics.map((pic) => {
                return <PhotoDisplayCard
                key={pic}
                url={props.url}
                blurb={props.blurb}
                date={props.date}
                title={props.title}
                copyright={props.copyright}/>
            })}
        </div>
    )
}

export default PhotoDisplayContainer;