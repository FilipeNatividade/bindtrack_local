import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SubContainer = styled.div`
  position: relative;
  padding: 50px 100px calc(40vh + 50px);
  h1 {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 25px;
    color: #1976d2;
    svg {
      font-size: 50px;
    }
  }
`;

export const Box = styled.div`
  border: 2px solid #c2c2c2;
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 25px;
`;

export const FooterTable = styled.div`
  background-color: #fff;
  border-top: 2px solid #c2c2c2;
  position: fixed;
  padding: 25px 100px;
  z-index: 2;
  bottom: 0;
  left: 0;
  height: 40vh;
  overflow: auto;
  width: 100%;
  display: inline-block;
`;
