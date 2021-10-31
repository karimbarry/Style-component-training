import React from 'react'
import styled from 'styled-components'
import { RED, PRIMARY_COLOR } from '../public/colors'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    & span {
        position: relative;
        display: block;
        width: 0;
        height: 0;
        border: 10px solid blue;
        border: 0 solid transparent;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 16px solid #fc5d5b;
        transform: rotate(-45deg);
        left: 10px;
        top: 10px;
        
        &:last-child{
            transform: rotate(130deg);
            left: -15px;
            top: 0;
            border-bottom: 17px solid ${PRIMARY_COLOR};
        }
    }
`

const Logo = () => {
    return <LogoContainer>
        <span></span>
        <span></span>
    </LogoContainer>
}

export default Logo