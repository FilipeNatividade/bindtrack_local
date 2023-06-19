import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SubContainer = styled.div`
  position: relative;
  padding: 50px 100px;
  h1 {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 25px;
    color: #1976d2;
    letter-spacing: 0.8px;
    svg {
      font-size: 50px;
    }
  }
`;

export const Box = styled.form`
  border: 2px solid #c2c2c2;
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 25px;
`;

export const SwitchContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${({ colorP }) => (colorP ? '#1976d2' : '#c2c2c2')};
  font-weight: bold;
  letter-spacing: 0.8;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
  button {
    background-color: #1976d2;
    border-radius: 8px;
    padding: 10px 40px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.8px;
  }
`;
