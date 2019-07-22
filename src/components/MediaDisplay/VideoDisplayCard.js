import React from 'react';
// import styled from 'styled-components'
// import {colors} from "../StyledVariables"

function VideoDisplayCard (props) {
console.log(props)
    return (
        <div className="img-card">
            <iframe src={props.object.url} title={props.object.media_type}></iframe>
            <h1>{props.object.title}</h1>
            <div className="attribution">
                <p className="date">{props.object.date}</p>
                <p className="copyright">{props.object.copyright}</p>
            </div>
            <p className="blurb">{props.object.explanation}</p>

        </div>
    )
}

export default VideoDisplayCard