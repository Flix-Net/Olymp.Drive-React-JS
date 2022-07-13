import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {createGlobalStyle} from "styled-components";

import {BrowserRouter} from "react-router-dom";

const Global = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style-type: none;
    font-family: "Roboto",sans-serif;
    box-sizing: border-box;
  }
  *::before, *::after{
    box-sizing: border-box;
  }

  div::selection{
    background-color: #1FFFBC;
  }

  body, html{
    height: 100%;
    scroll-behavior: smooth;
  }
  a{
    text-decoration: none;
    :hover{
      color: black;
    }
  }
  ol,ul{
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 10px; /* ширина для вертикального скролла */
    height: 10px; /* высота для горизонтального скролла */
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #20fa00;
    background: linear-gradient(180deg, #8CFF45 0%, rgba(221, 248, 20, 0.43) 78.97%, rgba(255, 245, 0, 0) 100%);

    border-radius: 9em;
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #253861;
  }
`

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Global/>
        <App/>
    </BrowserRouter>
)
