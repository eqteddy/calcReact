import InputStyled from "../styled-components/InputStyled";
const Pantalla = ({input}) => {
    return(
        <>
            <InputStyled type="text" value={input} readOnly>
            </InputStyled>
        </>
    )
}
export default Pantalla;