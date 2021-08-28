import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
    font-family: Roboto, Arial, sans-serif
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    min-height: 120vh;
  }

  body {
    background-color: #181818;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 16px;
    height: 8px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaaaaa;
    border: 4px #181818 solid;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #606060;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #606060;
  }
  ::-webkit-scrollbar-track {
    background: #181818;
    border: none;
    border-radius: 50px;
    
  }
  ::-webkit-scrollbar-track:hover {
    background: #181818;
  }
  ::-webkit-scrollbar-track:active {
    background: #181818;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  body {
    overflow-y: scroll;
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
  }

  #detach-button-host {
			display: none;
	}
`