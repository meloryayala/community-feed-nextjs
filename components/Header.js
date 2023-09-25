import styled from "styled-components";
import Head from "next/head";

const HeaderWrapper = styled.div`
  background-color: orange;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    height: 64px;
    pointer-events: none;
  }
`;

const Header = () => {
    return (
        <>
            <Head>
              <title>Community Feed</title>
                <meta
                    name='description'
                    content='This is a Community Feed project build with React'
                />
            </Head>
            <HeaderWrapper>
                <h1>Community Feed</h1>
            </HeaderWrapper>
        </>
    )
}

export default Header