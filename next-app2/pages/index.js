import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height : 100%;
    width : 100%;
`;
export default function Home() {
  return (
    <Container>
         <Sidebar/>
         <Main/>
    </Container>
  )
}
