import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    padding: 10px 30px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
`;
