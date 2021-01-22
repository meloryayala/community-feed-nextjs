import {createGlobalStyle} from "styled-components";
import Header from "../components/Header";

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
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
