import { createGlobalStyle } from "styled-components";
import { color, deviceMinWidth } from "./constants";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Open Sans', sans-serif;
  }
  *,*::after,*::before{
    box-sizing: border-box;
  }
  
  *::-webkit-scrollbar {
    width: 6px;
  }
 
  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${color.grey};
    border-radius: 3px;
  }

  body {
    min-width: 320px;
	  overflow-x: hidden;
    
  }

#root {
  margin: 1rem auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;


  @media ${deviceMinWidth.tablet} {
    margin: 2rem auto;
  }
}
  ul, ol, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

    
`;
