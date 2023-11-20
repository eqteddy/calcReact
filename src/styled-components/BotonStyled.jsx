import styled from "@emotion/styled";

const BotonStyled = styled.button((props) => {
    return `
        height: 83px;
        width: 83px;
        flex: 1 1;
        border: 2px solid white;
        margin: 4px;
        background-color: ${props.variant ? 'navy': 'white'};
        color: ${props.variant ? 'white': 'black'};
        border-color: black;
        &:hover {
            color: ${props.variant ? 'white': 'black'};
            background-color: ${props.variant ? '#286086': '#EEEEEE'};
        }
    `
})
export default BotonStyled;