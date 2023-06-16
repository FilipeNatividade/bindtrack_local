import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    width: 100%;
  }

  .App{
    display: flex;
    width: 100%;

    .contentBox{
     flex:1;
     position: relative;
    }

    
  }
  
  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    :active{
      color: inherit;
    }
  }
  
`;
