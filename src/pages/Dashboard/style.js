import styled from "styled-components";

export const Dashboard = styled.main`
    border: 0;
    display: grid;
    grid-template-rows: 56px 1fr 90px;
    width: 100%;
    height: 100%;
    
    @media screen and (min-width: 660px) {
        border: 1px solid ${props => props.theme.static.static4};
        border-radius: .6rem;
        max-width: 660px;
        max-height: 800px;
    }   
`

export const TodoHeader = styled.header`
    height: 56px;
    color: ${props => props.theme.font.font2};
    background-color: ${props => props.theme.background.bg1};
    display: flex;
    justify-content: space-between;
    padding: 0 3vmin;
    align-items: center;
    border-radius: 0;
    
    h3 {
        font-size: calc(1.1rem + 1.2vmin);
        color: ${props => props.theme.font.font2};
    }

    @media screen and (min-width: 660px) {
        border-radius: .6rem .6rem 0 0;
    }  
`