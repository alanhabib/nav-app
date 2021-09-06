import NavBar from "./components/NavBar";
import { GlobalStyle } from "./styling/globalStyling";
import styled from "styled-components";
import Tree from "./components/SideBar/Tree";

const Wrapper = styled.div`
  background: gray;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Wrapper>
        <Tree />
      </Wrapper>
    </>
  );
}

export default App;
