import React from 'react';
import PhotoDisplayCard from './PhotoDisplayCard';
import VideoDisplayCard from './VideoDisplayCard';
// import {colors} from "../StyledVariables"
// import styled from 'styled-components'

function MediaDisplayContainer (props) {

    return (
        <div className="photo-grid">
            {props.media_type==="image" ? <PhotoDisplayCard object={props.object}/> : <VideoDisplayCard object={props.object}/>}
        </div>
    )
}

export default MediaDisplayContainer;


// {props.pics.map((pic) => {
//     if (props.media_type==="image") {
//         return <PhotoDisplayCard
//             key={pic}
//             object={props.object}/>
//     } else {
//         return <VideoDisplayCard
//             key={pic}
//             object={props.object}
//             />
//     }
    
// })}