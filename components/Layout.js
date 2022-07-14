import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
`;

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}

      <StyledContainer>{children}</StyledContainer>
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
