import styled, { css } from "styled-components";

export const TodoListWrapper = styled.ul`
    height: 100%;
    background-color: ${props => props.theme.background.bg3};
    
`

export const TodoItem = styled.li`
    position: relative;
    padding: 18px 1vw 18px calc(1vw + 16px);
    background-color: ${props => props.theme.background.bg5};
    color: ${props => props.theme.font.font1};
    transition: background-color .3s;
    font-size: 1.1rem;
    display: grid;
    grid-template-columns: 1fr 106px 77px 36px;
    align-items: center;
    justify-content: center;
    gap: 12px;

    button {
        font-size: .77rem;
        padding: 4px;
    }

    p {
        margin-right: auto;
    }
 
    &:nth-child(2n) {
        background-color: ${props => props.theme.background.bg4};
    }
`

export const StatusMark = styled.span`
    position: absolute;
    top: 3px;
    left: 0;
    bottom: 3px;
    width: 16px;
    border-radius: 0 50% 50% 0;

    ${props => {
        let bgColor

        switch (props.status) {
            case 'inProgress':
                bgColor = props.theme.button.warning
                break;
            case 'completed': 
                bgColor = props.theme.button.success
                break
            default:
                bgColor = props.theme.button.secondary
                break;
        }

        return css`
            background-color: ${bgColor};
        `
    }}
`

export const taskMenu = styled.div`

`