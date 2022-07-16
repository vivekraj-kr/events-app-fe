import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 30px 0 60px;
  margin-top: ${({ isLandingPage }) => (isLandingPage ? "0" : "107px")};
`;

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  const isLandingPage = router.pathname === "/";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {isLandingPage && <Showcase />}

      <StyledContainer isLandingPage={isLandingPage}>
        {children}
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Design system events",
  description: "Design system events",
  keywords: "Design, events",
};
