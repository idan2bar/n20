import styled from "styled-components"


export default function FlexContainer({ children, direction = 'row' }) {
    return <FlexContainerStyle direction={direction}>
        { children }
    </FlexContainerStyle>
}

const FlexContainerStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.direction}
`