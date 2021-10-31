import React from 'react'
import styled from 'styled-components'
import { BORDER, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'
import Logo from './Logo'
import { Compass,Clipboard, Eye, Users, Video, BarChart2 } from 'react-feather'

const NavContainer = styled.nav`
    position : fixed;
    padding-top: 40px;
    background : #fff;
    width : 90px;
    height : 100%;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content : space-between;

    & div {
        width : 100%;
        & .link {
            height : 55px;
            display : flex;
            justify-content: center;
            align-items: center;
        }
        & .activeLink {
            height : 75px;
            display : flex;
            justify-content: center;
            align-items: center;
            border-right : 3.5px solid ${PRIMARY_COLOR};
        }
        & .link:hover {
            cursor: pointer;
            height : 55px;
            display : flex;
            justify-content: center;
            align-items: center;
            & .icon {
                background: ${TERTIARY_COLOR};
                transition-duration: 0.5s;
            }
        }
    }
    
    & a {
        display : bloc;
        
        & .icon{
            display : flex;
            align-items: center;
            justify-content : center;
            width: 60px;
            height: 57px;
            border-radius: 10px;
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &.active {
            & .icon{
                background: ${TERTIARY_COLOR};
                & svg {
                    
                }
            }

        }
    }
    & img.user__photo {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 40px;
    }
`

const NavLink = ({href='', isActive= false, children}) => {
    return <div href={href} className='button'>
        <div className={isActive ? "activeLink" : "link"}>
        <a className={isActive ? "active" : ""}>
            <span className='icon'>{React.cloneElement(children, {color: isActive ? PRIMARY_COLOR : '#B6B6B6'})}</span>
        </a>
        </div>
    </div>
}

const Sidebar = () => {
    return <NavContainer>
        <Logo/>
        <div className='nav__links'>
            <NavLink ><Compass size='20px'/></NavLink>
            <NavLink><Clipboard size='20px'/></NavLink>
            <NavLink><Eye size='20px'/></NavLink>
            <NavLink isActive={true}><Users size='20px'/></NavLink>
            <NavLink><BarChart2 size='20px'/></NavLink>
            <NavLink><Video size='20px'/></NavLink>
        </div>
        <img src='/images/15.jpg' alt="Photo d'utilisateur" className="user__photo"/>
    </NavContainer>
}

export default Sidebar