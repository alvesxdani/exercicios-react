import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::root {
    font: 14px 'Calibri';
  }
  
  body {
    font: 11px 'Calibri';
    margin: 0;
  }

  .box {
    background: #eee7;
    padding: 1rem;
    margin: 2rem auto;
    width: 400px;
    display: flex;
    justify-content:  center;
    border-radius: 1rem;
  }

  button {
  background: #e54;
  color: #fff;
  border: none;
  font: 0.9rem 'Calibri';
  padding: 0.6rem 0.9rem;
  border-radius: 0.6rem;
  margin: 1rem;
  cursor: pointer;
  }

  p {
    margin: 0.5rem;
  }

`;

export default GlobalStyle;
