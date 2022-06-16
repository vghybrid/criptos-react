import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    text-align: center;
`

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error