import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  color: #f7ebda;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 12px 30px;
  background-color: ${({ isLandingPage }) =>
    isLandingPage ? "transparent" : "#0d0f10"};
`;

const StyledLogo = styled.div`
  width: 80px;
  a {
    display: block;
  }
`;
const StyledNav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 40px;

  a {
    border: solid 3px transparent;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    border-bottom: solid 3px #f00;
  }
`;

const Header = () => {
  const router = useRouter();
  const isLandingPage = router.pathname === "/";
  return (
    <StyledHeader isLandingPage={isLandingPage}>
      <StyledLogo>
        <Link href="/">
          <a>
            <Image
              width={80}
              height={80}
              src="/images/events-logo.svg"
              alt="Events app logo"
            />
          </a>
        </Link>
      </StyledLogo>
      <StyledNav>
        <Link href="/events">
          <a>Events</a>
        </Link>
        <Link href="/events">
          <a>About</a>
        </Link>
        <Link href="/events">
          <a>Contact</a>
        </Link>
        <Link href="/events">
          <a>Register</a>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
