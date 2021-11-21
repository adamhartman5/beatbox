import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import {Howl} from 'howler'
import Bubble from '../audioclips/bubbleblip.mp3'
import Laugh from '../audioclips/evillaugh.mp3'
import Twinkle from '../audioclips/magicaltwinkle.mp3'
import Homer from '../audioclips/malevoiceclip119.mp3'
import Hey from '../audioclips/malevoiceclip123.mp3'
import Swipe from '../audioclips/reverseswipe.mp3'
import Rewind from '../audioclips/rewind.mp3'
import Rise from '../audioclips/rise.mp3'
import Sad from '../audioclips/trumpetsad.mp3'

const Beatbox = () => {

    const [label, setLabel] = useState("Press a key");

    const audioClips = [
        {src: Bubble, label: 'Bubble', key:'Q'},
        {src: Laugh, label: 'HahHAH', key:'W'},
        {src: Twinkle, label: 'Twinkle', key:'E'},
        {src: Homer, label: 'WhoohOO', key:'A'},
        {src: Hey, label: 'HEY', key:'S'},
        {src: Swipe, label: 'Swipe', key:'D'},
        {src: Rewind, label: 'Rewind', key:'Z'},
        {src: Rise, label: 'Rise', key:'X'},
        {src: Sad, label: 'Sad', key:'C'},
    ]

    const playAudio = (letter) => {
        audioClips.map((clip) => {
            if (clip.key === letter.target.textContent){
                const sound = new Howl({
                    src: [clip.src]
                })
                setLabel(clip.label)
                sound.play()
            }
        })
    }

    return (
        <Container>
            <Main>
                <Display>
                    {label}
                </Display>
                <ButtonsContainer>
                    {audioClips.map((letter) =>   
                        <Button letter={letter.key} playAudio={playAudio}/>
                    )}
                </ButtonsContainer>
            </Main>
        </Container>
    )
}

export default Beatbox

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background: linear-gradient(145deg, #61baca, #74ddf0);
    justify-content: center;
    align-items: center;
    font-family: "Pattaya", sans-serif;
    color: rgb(0, 15,48);
    
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 500px;
    border-radius: 53px;
    background: linear-gradient(145deg, #61baca, #74ddf0);
    box-shadow:  17px 17px 33px #61baca,
                -17px -17px 33px #77e4f6;
`

const Display = styled.div`
    display: flex;
    height: 25%;
    margin: 30px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow:  17px 17px 33px #61baca,
                -17px -17px 33px #77e4f6;
    color: #d5d5d5;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 36px;
    font-family: "Roboto", sans-serif;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-evenly;
    height: 75%;
    margin: 10px;
    box-sizing: border-box;
`