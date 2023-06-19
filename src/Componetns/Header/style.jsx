import styled from 'styled-components';

export const HeaderContain = styled.header`
  background-color: #1976d2;
  height: 72px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 100px;
  width: 100%;
  justify-content: space-between;
`;

export const DropdownBox = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 90px;
  select {
    width: 200px;
    height: 40px;
    border-radius: 8px;
  }
`;
