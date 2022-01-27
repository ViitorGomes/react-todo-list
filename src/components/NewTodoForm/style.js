import styled from "styled-components";


export const NewTaskForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 140px;
    align-items: center;
    padding: 16px;
    gap: 8px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background.bg4};
    transition: background-color .3s;
    
    @media screen and (min-width: 660px) {
        border-radius: 0 0 .6rem .6rem;
    }

    button {
        padding: 10px 10px;
    }
`