import styled, { css } from "styled-components";

export const Button = styled.button`
    z-index: 1000;
    padding: 6px 10px;
    border-radius: .3rem;
    color: ${props => props.theme.static.static1};
    border: 0;
    transition: .2s ease-in;
    cursor: pointer;
    font-size: 1.1rem;

    ${props => {
        let bgColor, hoverColor;
        const buttonColors = props.theme.button

        switch (props.styleType) {
            case 'secondary':
                bgColor = buttonColors.secondary
                hoverColor = buttonColors.secondaryHover
                break
            case 'success':
                bgColor = buttonColors.success
                hoverColor = buttonColors.successHover
                break
            case 'failure':
                bgColor = buttonColors.failure
                hoverColor = buttonColors.failureHover
                break
            case 'warning':
                bgColor = buttonColors.warning
                hoverColor = buttonColors.warningHover
                break
            default:
                bgColor = buttonColors.active
                hoverColor = buttonColors.activeHover
                
        }

        return css`
            background-color: ${bgColor};
            border: 2px solid ${bgColor};

            &:hover {
                background-color: ${hoverColor};
            }
        `

    }}
`

export const SimpleButton = styled.button`
    padding: 4px;
    outline: 0;
    border: 0;
    background-color: transparent;
    color: ${props => props.theme.font.font1};
    cursor: pointer;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        font-size: 1.7rem;
    }

    &:hover {
        transform: scale(1.15);
    }
`