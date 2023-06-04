import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  :root{
    --color-primary: #FD377E;
    --color-primary-2: #E34981;
    --color-secundary: #03B898;

    --color-grey-1: #F8F9FA;
    --color-grey-2: #E9ECEF;
    --color-grey-3: #868E96;
    --color-grey-4: #212529;
    --color-white: #FFFFFF;

    --font-primary: "Nunito", sans-serif;
    --font-secundary: "Inter", sans-serif;

    --font-weigth-1: 700;
    --font-weigth-2: 500;
    --font-weigth-3: 400;
    

    --font-size-1: 1.375rem;
    --font-size-2: 1rem;
    --font-size-3: 0.75rem;
    --font-size-4: 0.625rem;
  }
`

export default GlobalStyles;