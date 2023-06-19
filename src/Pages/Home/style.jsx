import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SubContainer = styled.div`
  position: relative;
  padding: ${({ openFooter }) =>
    openFooter ? '50px 100px calc(40vh + 50px)' : '50px 100px'};
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
  z-index: 2;
  bottom: 0;
  left: 0;
  height: ${({ openFooter }) => (openFooter ? '40vh' : '0')};
  width: 100%;
  .tableBox {
    display: inline-block;
    overflow: auto;
    width: 100%;
    padding: ${({ openFooter }) => (openFooter ? ' 25px 100px' : '0')};
  }
  .collapseButton {
    position: absolute;
    margin-top: -28px;
    right: 0;
    background-color: #1976d2;
    color: #fff;
    padding: 0 5px;
  }
`;
