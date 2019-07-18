import React from 'react'
import styled from 'styled-components'
import {colors} from "./StyledVariables"

function Header (props) {
    const HeaderDiv = styled.div`
        background-color: ${colors.primary.full};
        padding: 1rem;
        color: ${colors.secondary.white}
        display: flex;
    `;

    const LogoImg = styled.img`
        border-radius: 50%;
        max-width: 10rem;
        border: 3px solid ${colors.primary.dark}
        display: flex;
    `;

    return (
        <HeaderDiv>
            <LogoImg src="https://i.imgur.com/Mv3wDVs.jpg"></LogoImg>
            <h1>NASA's Photo of the Day</h1>
            <p>Enjoy a look at the wonders of our universe with NASA's photos and videos of the day!</p>
        </HeaderDiv>
    )
}

export default Header;