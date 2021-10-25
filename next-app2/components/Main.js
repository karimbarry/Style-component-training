import styled from 'styled-components'
import { ChevronLeft } from 'react-feather';

const Button = ({ className , children }) => (
    <a className = {className}>
        {children}
    </a>
  );
  
const ContainerMain = styled.div`
    display: flex;
    width: 100%;
    border-left: 1.5px solid #eff1f3;
    border-radius: 20px;
`;
const Title = styled.h1`
    font-size : 28px;
    height : 45px;
    padding: 0 15px;
    font-weight : 400;
`;
const Div = styled.div`
    display: flex;
    padding: 68px 15px;
    align-items : center;
    height : 50px;
    justify-content:center;
`;

const StyledButton = styled(Button)`
    width : 40px;
    height : 40px;
    border-radius : 15px;
    background-color: #eff1f3;
    color : #a0a7b1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Main = () => {
    return (
    <ContainerMain>
        <Div> 
            <StyledButton>
                <ChevronLeft/>
            </StyledButton>
            <Title>
                Chat
            </Title>
        </Div>

        <Div> 

        </Div>

        <Div> 

        </Div>
    </ContainerMain>
    )
}

export default Main