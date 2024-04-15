import AppTitle from "./navbar/AppTitle";
import FlexContainer from "./utils/FlexContainer";
import NavbarLink from "./navbar/NavbarLink";
import { Navbar } from "./navbar/navbar";
import styled from "styled-components";

export default function App() {
  return (
    <AppStyle>
      <Navbar />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`