import styled from "styled-components"
import AppTitle from "./AppTitle"
import FlexContainer from "../utils/FlexContainer"
import NavbarLink from "./NavbarLink"

export function Navbar() {
    return <NavbarStyle>
        <AppTitle />
        <FlexContainer direction="row">
            <NavbarLink text="ציורים" />
            <NavbarLink text="תעודות" />
            <NavbarLink text="כישורים" />
        </FlexContainer>
    </NavbarStyle>
}

const NavbarStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 72px;

    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 0 32px;

    background-color: white;
`