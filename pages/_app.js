import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', 'Roboto', 'Helvetica Neue', sans-serif;
  }
`

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
