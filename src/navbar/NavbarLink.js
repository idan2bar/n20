import styled from "styled-components"


export default function NavbarLink({ text }) {
    return <NavbarLinkStyle>
        { text }
    </NavbarLinkStyle>
}

const NavbarLinkStyle = styled.a`
    display: flex;
    align-items: center;
    padding: 0 24px;

    transition-duration: 200ms;

    &:hover {
        background-color: hsl(33, 73%, 94%);
    }
`