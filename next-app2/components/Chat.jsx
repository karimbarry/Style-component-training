import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import { BORDER, LIGHT_COLOR, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'
import { ChevronLeft, ChevronDown, Settings, Search } from 'react-feather'
import ChatList from './ChatList'
import ChatBloc from './ChatBloc'


const ChatContainer = styled.div`
    display: flex;
    position: absolute;
    left: 90px;
    right : 75px;
    height: 100%;
    border-radius: 18px;
    border-left : 1.5px solid ${BORDER};
    padding : 20px 20px;
    padding-right : 0;
        & .chatDescription {
            height : 100%;
            width : 25%;
            display : flex;
            align-items: center;
            flex-direction : column;

                & .chatDescriptionHeader {
                    display : flex;
                    align-items: center;
                    width: 100%;
                    height: 57px;
                    padding-top: 30px;
                    padding-bottom: 40px;
                    border-bottom: 1px solid ${BORDER};
                    margin-bottom: 20px;
            
                        & button {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 40px;
                            height: 40px;
                            border-radius: 8px;
                            border: none;
                            color : ${LIGHT_COLOR};
                            & :hover{
                                cursor : pointer;
                            }
                }
                        & h1 {
                            padding : 0 20px;
                            font-weight : 500;
                        }
        }
                 & .chatDescriptionBody {
                        display : flex;
                        width: 100%;
                        justify-content: center;
                        margin-bottom : 20px;
                        margin-top: 10px;
                    & .User__setting{
                        display : flex;
                        height : 20px;
                       
                    }
        
                    & .user__photo__container{
                        position  : relative;
                        width : 100%;
                        display: flex;
                        align-items : center;
                        flex-direction : column;
                        & .user__photoT{
                            position : relative;
                        }
                        & img {
                            height : 90px;
                            width : 90px;
                            border-radius : 50%;
                            object-fit : cover;
                        }
                        & nav {
                            position: absolute;
                            bottom: 10px;
                            height: 12px;
                            width: 12px;
                            right: 7px;
                            border-radius: 50%;
                            border: 2px solid #FFFF;
                            background-color: ${PRIMARY_COLOR};
                            }
                        & .statu__User{
                            height  : auto;
                            display  : flex;
                            flex-direction : column;
                            align-items: center;
                            & h1 {
                                font-weight : 500;
                            }
                            & .button__statu {
                                border: none;
                                width : 100px;
                                height : 30px;
                                border-radius : 8px;
                                color : ${PRIMARY_COLOR};
                                background : #bfe8e1;
                                & div {
                                    display: flex;
                                    justify-content: space-around;
                                    align-items: center;
                                }
                                & :hover {
                                    cursor: pointer;
                                }
                            }
                        }
                }
            }
            & .chatSearchChat {
                background-color: #f0f4f9;
                border-radius : 10px;
                width: 100%;
                & div {
                    display : flex;
                    align-items: center;
                    background-color: #f0f4f9;
                    border-radius: 10px;
                }
                & .btn_search {
                    padding-right : 10px;
                }
                & .search_input {
                    width: 100%;
                    height: 2px;
                    border : none;
                    background-color: #f0f4f9;
                    border-radius : 10px;
                    padding: 20px;
                    outline: 0;
                }
            }
         
        }
    

`

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}
    return <div>
            
            <input 
                onChange={handleInput} 
                className='search_input'
                placeholder='Search'>
            </input>
            <a href='#' className='btn_search'>
                <Search   
                set="light"
                color='#B6B6B6'/>
            </a>
    </div>
}
const UserActivity =  ({isOnline = false , children, name}) =>{

    return  <a className='user__photo__container'>
                <div className='user__photoT'>
                    {children}
                    {isOnline ? <nav></nav> : ' '}
                </div>
                <div className= 'statu__User'>
                    <h1>
                        {name}
                    </h1>
                    <button className='button__statu'>
                        {isOnline ? <div>
                        <b>available</b>
                        <ChevronDown size='12px'/>
                        </div> : ''}
                    </button>
                </div>
                
            </a>
}

const Chat = () => {
    return (<ChatContainer>
            <nav className='chatDescription'>
                <div className ='chatDescriptionHeader'>
                    <button>
                        <ChevronLeft size="18px"/>
                    </button>
                    <h1>Chat</h1>
                </div>
                <div className ='chatDescriptionBody'>
                    <UserActivity isOnline = {true} name={'Jontray Arnold'}>
                        <img src='/images/15.jpg' alt="Photo d'utilisateur" className="user__photo"/>
                    </UserActivity>
                    <a className='User__setting'><Settings size='16px' color ='#B6B6B6'/></a> 
                </div>
                <div className='chatSearchChat'>
                    <SearchBar />
                </div>
                <ChatList/>
            </nav>
            <ChatBloc/>
    </ChatContainer>)
}

export default Chat