import React from 'react'
import styled from 'styled-components'

const Button = ({letter, playAudio}) => {

    return (
        <ButtonItem onClick={playAudio}>
           {letter} 
        </ButtonItem>
    )
}

export default Button

const ButtonItem = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    margin: 8px;
    color: #d5d5d5;
    font-weight: 400;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    border-radius: 53px;
    background: linear-gradient(145deg, #61baca, #74ddf0);
    box-shadow:  17px 17px 33px #61baca,
                -17px -17px 33px #77e4f6;

    :hover {
        background: linear-gradient(145deg, #7a32ca, #903bf0);
    }

`