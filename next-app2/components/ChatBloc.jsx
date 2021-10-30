import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import { BORDER, LIGHT_COLOR, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'
import { Send, Paperclip,Smile } from 'react-feather'

const ChatBlocContainer = styled.div`
    height : 660px;
    width: 75%;
    padding: 0 0 0 12px;
    

    & .bloc__container{
        height : 100%;
        width: 100%;
        background : #edf0f5;
        border-radius : 8px;
        display: flex;
        flex-direction: column;
        & .bloc__containerHeader{
            width : 100%;
            height : 72px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #dadceb;
            & h1 {
                font-weight : 500;
                font-size: 22px;
                padding : 0 20px;
            }
            & .chatButton__bloc_container {
                display: flex;
                align-items: center;
                padding: 0 20px;
                & button {
                    border: none;
                    width : 100px;
                    height : 30px;
                    border-radius : 8px;
                    background : none;  
                    font-weight : 600;
                    color: #b9bcbe;
                    & :hover{
                        cursor:pointer;
                    }
                }
                & .activeButton {
                    color : ${PRIMARY_COLOR};
                    background : #d1e7e8;
                }
            }
        }
        & .bloc__containerBody{
            width : 100%;
            height : 75%;
        }
        & .bloc__containerFoot {
            width : 100%;
            height : 15%;
            display : flex;
            align-items: center;
            padding : 0 40px;
            & .Message__inputContainer{
                height: 60px;
                width : 100%;
                display: flex;
                align-items:center;
                padding : 0 10px;
                border-radius : 10px;
                background-color: #ffffff;
                box-shadow: 2px 7px 17px -10px rgba(0,0,0,0.35);
            }
            & .Message_input {
                width: 100%;
                height: 60px;
                border : none;
                border-radius : 10px;
                padding : 0 40px;
                outline: 0;
                

            }
            & .Tools {
                display: flex;
                height : 60px;
                width: 150px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                & button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    border: none;
                    background : ${PRIMARY_COLOR};
                    & :hover{
                        cursor : pointer;
                    }
            }
        }

    }
`
const Button = ({children, isActiveButton = false}) => {
    return <button className = {isActiveButton ? 'activeButton' : ''} >
            <b>{children}</b>
        </button>
}
const MessageWriteBar = () => {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}
    return <div className='Message__inputContainer'>
                <input onChange={handleInput} className='Message_input' placeholder='Write your message...'></input>
                <div className='Tools'>
                        <Smile size='20px' color='#b9bcbe'/>
                        <Paperclip size='20px' color='#b9bcbe'/>
                       <button><Send size='24px' fill='#ffffff' color={PRIMARY_COLOR}/></button>
                    </div>
            </div>
}
const ChatBloc = () => {
    return <ChatBlocContainer>
            <div className='bloc__container'>
                <div className='bloc__containerHeader'>
                    <h1>Group chat</h1>
                    <div className ='chatButton__bloc_container'>
                        <Button isActiveButton = {true}>
                            Messages
                        </Button>
                        <Button>
                            Participants
                        </Button>
                    </div>
                </div>
                <div className='bloc__containerBody'></div>
                <div className='bloc__containerFoot'>
                   < MessageWriteBar />

                </div>
                
            </div>
    </ChatBlocContainer>
}
 export default ChatBloc 