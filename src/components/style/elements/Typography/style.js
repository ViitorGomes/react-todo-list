import styled, { css } from "styled-components";

const H1 = styled.h1`
    font-size: calc(1.2rem + 1.6vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const H2 = styled.h2`
    font-size: calc(1.15rem + 1.55vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const H3 = styled.h3`
    font-size: calc(1.1rem + 1.5vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const H4 = styled.h4`
    font-size: calc(1.05rem + 1.45vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const H5 = styled.h5`
    font-size: calc(1rem + 1.4vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const H6 = styled.h6`
    font-size: calc(.95rem + 1.35vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const P = styled.p`

    font-size: calc(.77rem + .66vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`

const Span = styled.span`

    font-size: calc(.77rem + .66vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`
const A = styled.a`

    font-size: calc(.77rem + .66vmin);
    color: ${props => props.theme.font.font1};

    ${props => props.align && css`
        text-align: ${props.align};
    `}

`
export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Span,
    A
}

