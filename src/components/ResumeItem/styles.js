import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;

    @media (max-width: 1024px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (max-width: 600px) {
        width: 70%;
        padding: 10px;

        p {
            font-size: 14px;
        }

        span {
            font-size: 24px;
        }
    }

    @media (max-width: 480px) {
        width: 90%;

        p {
            font-size: 12px;
        }

        span {
            font-size: 20px;
        }

        svg {
            display: none;        
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg { 
        width: 25px;
        height: 25px;
    }

    @media (max-width: 768px) {
        margin: 15px auto;

        svg { 
            width: 20px;
            height: 20px;
        }
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 26px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }
`;
