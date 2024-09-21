import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: #182848;

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
    padding: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 2em;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;

  @media (max-width: 768px) {
    padding-top: 15px;
  }

  @media (max-width: 480px) {
    padding-top: 10px;
  }
`;