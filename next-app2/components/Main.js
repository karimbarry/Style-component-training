import React from 'react'
import styled from 'styled-components'
import { ChevronRight,File,Image,Copy,Link2, Layers, VideoOff } from 'react-feather'
import { BORDER, LIGHT_COLOR, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'

const ChatDetailsContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 75px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    & .header{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid ${BORDER};
        & button{
            width: 40px;
            height: 40px;
        }
    }
    & .chat__photo{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: 40px;
        margin-bottom: 25px;
    }
    & h3{
        font-weight: 500;
        font-size: 16px;
        color: ${LIGHT_COLOR};
        text-align: center;
    }
    & button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 8px;
        border: none;
        margin-bottom: 20px;
        color: ${LIGHT_COLOR};
        & :hover{
            cursor : pointer;
        }
    }
`

const Main = () => {
    return <ChatDetailsContainer>
        
        <div className="header">
            <button className="show__details__buttons">
                <ChevronRight size="18px"/>
            </button>
        </div>
        <img src="/images/2.jpg" alt="" className="chat__photo"/>
        <div className="actions">
            <h3>Files</h3>

            <button style={{background: "#dfe1f9"}}><File size='20px' fill='#5a68df' color='#dfe1f9'/></button>
            <button style={{background: "#f4eacf"}}><Image size='20px' fill='#c4b07a' color='#f4eacf'/></button>
            <button style={{background: "#e4f7f9"}}><Layers size='20px' fill='#50b0ba' color='#e4f7f9'/></button>
            <button style={{background: "#ffe0da"}}><Copy size='20px' fill='#be6e5f' color='#ffe0da'/></button>
            <button style={{background: "#e0eed5"}}><Link2 size='20px' fill='#80a763' color='#e0eed5'/></button>
        </div>
    </ChatDetailsContainer>
}

export default Main