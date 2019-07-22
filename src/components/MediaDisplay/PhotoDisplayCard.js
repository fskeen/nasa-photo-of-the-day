import React from 'react';
import styled from 'styled-components'
// import {colors} from "../StyledVariables"

const CardTile = styled.div`
    margin: 2rem 3rem;
`;

const CardImg = styled.img`
    width: 100%;
    border-radius: .25rem
    box-shadow: 2px 2px 10px grey;
`;

function PhotoDisplayCard (props) {

    return (
        <CardTile>
            <CardImg src={props.object.url}></CardImg>
            <h1>{props.object.title}</h1>
            <div className="attribution">
                <p className="date">{props.object.date}</p>
                <p className="copyright">{props.object.copyright}</p>
            </div>
            <p className="blurb">{props.object.explanation}</p>

        </CardTile>
    )
}

export default PhotoDisplayCard