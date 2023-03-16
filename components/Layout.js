import Navigation from './Navigation';
import { css } from "@emotion/css";
import Head from 'next/head';

const containerStyles = css`
  max-width: 1024px;
  margin: 32px;
  width: 100%;
`;

const navigationStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

function Layout({ children }) {
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <title>Tarik je kroooooolj</title>
            </Head>
            <div className={navigationStyle}>
                <Navigation />
                <div className={containerStyles}>{children}</div>
            </div>
        </div>
    );
}

export default Layout;
