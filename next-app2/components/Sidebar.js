import styled from 'styled-components'
import { Compass, Triangle,Clipboard, Eye, Users, Video, BarChart2 } from 'react-feather';

const Link = ({className , children }) => (
    <a className = {className}>
        {children}
    </a>
  );

const Div = styled.nav`
    width : 60px;
    height : 100%;
    border-radius : 5px;
    background: ${props => props.primary ? "#e1f3f2" : "none"};
    display: flex;
    align-items: center;
    justify-content: center;
`;

  
const StyledLink = styled(Link)`
    height : 60px;
    width : 100%;
    display : flex;
    align-items center;
    justify-content: center;
    color : #dcdfe6;
    border-right: ${props => props.primary ? "5px solid #00a48a" : "none"};
    border-radius: ${props => props.primary ? "3px" : "none"};
`;
const StyledContain = styled.div`
    border-radius: 3px;
    width : 100px;
    height : 100%;
    display : flex;
    align-items: center;
    flex-direction: column;

`;
const StyledContainer = styled(StyledContain)`
    padding : 40px;
`;
const StyledContainHead = styled(StyledContain)`
    color: green;
    margin-bottom : 70px;

`;
const StyledContainFoot = styled(StyledContain)`
    margin-top : 70px;
`;
const Sidebar= () => {
    return (
    <StyledContainer>
        <StyledContainHead>
            <StyledLink>
                <Div>
                    <Triangle size='30px' color='green'/>
                    <Triangle size='30px' color='orange' style={{transform: 'rotate(180deg)'}}/>
                </Div>
            </StyledLink> 
        </StyledContainHead>
        <StyledContain>

                <StyledLink>
                    <Div>
                        <Compass/>
                    </Div>
                </StyledLink> 

                <StyledLink>
                    <Div>
                        <Clipboard/>
                    </Div>
                </StyledLink> 

                <StyledLink>
                    <Div>
                        <Eye/>
                    </Div>
                </StyledLink> 

                <StyledLink style={{backgroundColor : 'red'}} primary>
                    <Div primary>
                        <Users color ='green'/>
                    </Div>
                </StyledLink> 

                <StyledLink>
                    <Div>
                        <BarChart2/>
                    </Div>
                </StyledLink> 

                <StyledLink>
                    <Div>
                        <Video/>
                    </Div>
                </StyledLink> 

        </StyledContain>
        <StyledContainFoot>
            <StyledLink>
                <img src="/images/3.jpg" alt="Image de l'utilisateur" height='40px' width='40px' style={{borderRadius : '50px'}} />
            </StyledLink>
        </StyledContainFoot>

    </StyledContainer>
    
           )
}
export default Sidebar