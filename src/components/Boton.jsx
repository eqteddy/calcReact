import BotonStyled from "../styled-components/BotonStyled";
const Boton = ({ children, handleClick, variant }) => {
    return (
        <>
            <BotonStyled onClick={() => handleClick(children)} variant={variant}>
                {children}
            </BotonStyled>
        </>
    )
}

export default Boton;