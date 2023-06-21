import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    font-size: 62.5%;

    --purple: ${(props) => props.theme.purple};
    --yellow: ${(props) => props.theme.yellow};
    --dark-yellow: ${(props) => props.theme['yellow-dark']};
    --gray:${(props) => props.theme['base-text']};
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${props => props.theme.background };
    font-size: 1.6rem;
}

`