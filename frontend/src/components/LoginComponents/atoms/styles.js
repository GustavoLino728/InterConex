import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const BtnPrimary = styled.button`
    width: 100%;
    max-width: 100%;
    height: 5vh;
    background: #280F3E;
    
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;

    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #F4E9E1;

    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.01);
        background: #BA68C8;
    }

    &:disabled{
        background: #CECBC5;
        color: #280F3E;
        border: 1px solid #280F3E;
        cursor: not-allowed;

        &:hover{
            transform: none;
            background: #CECBC5;
        }
    }
`

export const BtnSecondary = styled.button`
    width: 100%;
    max-width: 30%;
    height: 5vh;
    background: #F4E9E1;
    
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;

    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #280F3E;

    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.01);
        background: #BA68C8;
    }
`

export const SelectContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 5vh;
    background: #FFF;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 2vh;
    border-radius: 10px;

    filter: drop-shadow(0 2px 1px #333);
    transition: 0.1s ease-in-out;

    &:hover{
        outline: #9FA8D0 solid 2px;
    }
`

export const SelectInput = styled.select`
    width: 100%;
    height: 100%;
    background: transparent;
    font-family: 'Poppins';
    margin: 0 20px 0 0;
    
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    font-size: 15px;
    border: none;
    padding: 0;
    border-radius: 10px;

    cursor: pointer;
    
    &:focus{
        outline: 0;
    }
`

export const Options = styled.option`
    color: #9FA8D0;
    font-family: 'Poppins';
    font-size: 15px;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 5vh;
    background: #FFF;
    display: flex;
    align-items: center;
    
    margin-bottom: 2vh;
    border-radius: 10px;

    filter: drop-shadow(0 2px 1px #333);
    transition: 0.1s ease-in-out;

    &:hover{
        outline: #9FA8D0 solid 2px;
    }
`

export const InpPrimary = styled.input`
    width: 100%;
    max-width: 95%;
    height: 100%;
    background: transparent;
    
    font-size: 16px;
    font-family: 'Poppins';
    border: none;
    padding: 0;
    border-radius: 10px;

    &::placeholder{
        color: #9FA8D0;
        font-family: 'Poppins';
        font-size: 13px;
    }

    &:focus{
        outline: 0;
    }
`

export const IconContainer = styled.div`
    padding: 0 10px;
`

export const ErrorText = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: red;
    margin: -5px 0 10px 0;
    `