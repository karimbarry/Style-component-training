import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import { BORDER, LIGHT_COLOR, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'
import { Plus, MoreVertical } from 'react-feather'

const ChatListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
        & .MessagesList{
            height : 230px;
            overflow : scroll;
            overflow-x : auto;
        }
        & .ChatListHeader{
            padding: 25px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & b {
                font-weight : 600;
                font-size: 14px;
                color : ${LIGHT_COLOR};
            }
            & .User__utilities {
                width : 65px;
                display: flex;
                align-items: center;
                height: auto;
                justify-content: space-between;
            }
                & button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 8px;
                    border: none;
                    background: ${TERTIARY_COLOR};
                    color: ${PRIMARY_COLOR};
                    & :hover{
                        cursor : pointer;
                    }
              
            }
        }
        & .actionUser {
            & :hover{
                cursor: pointer;
            }
            & nav {
            display: flex;
            width: 100%;
            border-radius: 5px;
            height :  70px;
            align-items: center;
            padding: 0 10px;
            }
            & .activeChat {
                background: #f7f8fa;
            }

            & .User__imgList{
                display: flex;
                align-items: center;
            }
            & .user__photo__chatList{
                height : 32px;
                width : 32px;
                object-fit : cover;
                border-radius : 50%;
            }
            
        }
        & .USerInfoTask{
            margin-left: 15px;
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & .USerInfo{
            display: flex;
            flex-direction: column;
        & p {
                font-size: 13px;
                margin: 0;
                color: #b9bcbe;
            }
        }
        & .tim {
            font-size: 14px;
            color: ${LIGHT_COLOR};
            height : 33px;
        }

    
`
const Action = ({img, name, time, actionDescription , isActiveChat =false}) =>{
    return <div className='actionUser' >
        <nav className={isActiveChat ? 'activeChat' : ''}>
        <div className='User__imgList'>{img}</div>
        <div className='USerInfoTask'>
            <div className='USerInfo'>
                <b>{name}</b>
                <p>{actionDescription}</p>
            </div>
                <b className='tim'>{time}</b>
        </div>
        </nav>
    </div>
}
const ChatList = () => {
    return <ChatListContainer>
            <div className='ChatListHeader'>
                <b>Last Chats</b>
                <div className='User__utilities'>
                    <button><Plus/></button>
                    <MoreVertical size='22px' color='#b9bcbe'/>
                    </div>
            </div>
            <div className='MessagesList'>
                <Action img={<img src='/images/30.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Real Estate deals'}
                actionDescription ={"Typing..."}
                time={'11:15'} 
                isActiveChat={true}/>
                <Action img={<img src='/images/5.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Kate Jonhson'}
                actionDescription ={"I will send the documents tom..."}
                time={'11:13'} />
                <Action img={<img src='/images/18.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Tamara Schevensko'}
                actionDescription ={"Came take her..."}
                time={'10:43'} />
                <Action img={<img src='/images/3.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Kate Harley'}
                actionDescription ={"I will go to the..."}
                time={'10:42'} />
                <Action img={<img src='/images/28.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'harry Jonhson'}
                actionDescription ={"Fuck your mother bro..."}
                time={'10:41'} />
                <Action img={<img src='/images/29.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Ken Harley'}
                actionDescription ={"Her frend is a..."}
                time={'9:41'} /><Action img={<img src='/images/22.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Aryana Monroe'}
                actionDescription ={"So good..."}
                time={'9:40'} />
                <Action img={<img src='/images/21.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Harly King'}
                actionDescription ={"good job awes..."}
                time={'8:41'} /><Action img={<img src='/images/20.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Jeyna rey'}
                actionDescription ={"So good u are..."}
                time={'8:40'} /><Action img={<img src='/images/17.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Brooke harson'}
                actionDescription ={"no friend is a..."}
                time={'8:31'} /><Action img={<img src='/images/6.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Cersei Monroe'}
                actionDescription ={"Stuf her compan..."}
                time={'8:20'} /><Action img={<img src='/images/9.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Sacha Cooper'}
                actionDescription ={"No bad so..."}
                time={'7:41'} /><Action img={<img src='/images/12.jpg' alt="Photo d'utilisateur" className="user__photo__chatList"/>} 
                name={'Stephy Rose'}
                actionDescription ={"Bye..."}
                time={'6:40'} />
            </div>
           </ChatListContainer>

}
export default ChatList