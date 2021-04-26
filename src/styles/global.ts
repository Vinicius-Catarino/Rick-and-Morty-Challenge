import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, input , button {
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
}

body {
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

button {
  color: #FFF;
  cursor: pointer;
}

.MuiPaginationItem-root{
  color:  #fff !important;
}

`;
