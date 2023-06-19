import { styled } from 'styled-components';

export const Container = styled.div`
  border-right: 2px solid #c2c2c2;
  min-height: 100vh;
  ul {
    padding: 50px 0;
  }
  svg {
    font-size: 35px;
  }
`;
export const HeaderDrawer = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: ${({ open }) => (open ? 'flex-end' : 'center')};
  border-bottom: 2px solid #c2c2c2;
  padding: 0 25px;
  svg {
    color: #1976d2;
  }
`;

export const ListsMenu = styled.li`
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 550;
  letter-spacing: 0.5px;
  ${({ pageOpen }) => pageOpen && 'background-color:#1976d2'};
  cursor: pointer;
  a,
  p {
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    gap: 10px;
    ${({ pageOpen }) => (pageOpen ? 'color:#fff' : 'color: #1976d2')};
  }
  p {
    color: #c2c2c2;
    
  }
`;
