import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
    height: 46px;
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.static.static2};
    position: relative;

    label {
        position: absolute;
        left: 4px;
        top: 20%;
        color: ${props => props.theme.font.font1};
        pointer-events: none;
        background-color: transparent;
        padding: 3px;
        transition: .2s;
        font-size: 1rem;
        display: block;
    }

    input {
        border-radius: inherit;
        width: 100%;
        height: 100%;
        outline: 0;
        background-color: ${props => props.theme.background.bg4};
        color: ${props => props.theme.font.font1};
        font-size: 1.09rem;
        padding: 0 8px;
        border: 1px solid transparent;
        transition: background-color .3s;

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus {
            border: 1px solid transparent;
            -webkit-text-fill-color: ${props => props.theme.font.font1};
            -webkit-box-shadow: 0 0 0px 1000px transform inset;
            transition: all .2s, background-color 9999s ease-in-out 0s;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    ${props => props.isFocus && css`
        border: 1px solid ${props => props.theme.static.static3};
        transition: 0s ease-in;

        label {
            color: ${props => props.theme.font.font4};
        }

        input {
            border: 1px solid ${props => props.theme.static.static3};
            transition: 0s ease-in;

            :-webkit-autofill,
            &:-webkit-autofill:hover, 
            &:-webkit-autofill:focus {
                border: 1px solid ${props => props.theme.static.static3};
            }
        }

    `}

    ${props => props.isFocus || props.notEmpty ? css`

        label {
            font-size: 77%;
            top: 0; 
            transform: translateY(-55%); 
            background-color: ${props => props.theme.background.bg4};
        }
    ` : {}}
`