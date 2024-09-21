import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px) {
       display: grid; 
       padding: 10px;
       gap: 15px;
    }

    @media (max-width: 480px) {
       width: 100%;
       margin: 10px auto;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 14px;

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 8px 12px;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0px;

        @media (max-width: 480px) {
            margin-left: 10px;
        }
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #182848;

    @media (max-width: 480px) {
        width: 100%;
        padding: 10px;
    }
`;
