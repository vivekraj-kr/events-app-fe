import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  color: #f7ebda;
  position: fixed;
  width: 100%;
  padding: 12px 30px;
`;
const StyledLogo = styled.div`
  width: 80px;
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
  return (
    <StyledHeader>
      <StyledLogo>
        <Link href="/">
          <img src="/images/events-logo.svg" at="" />
        </Link>
      </StyledLogo>
      <StyledNav>
        <Link href="/events">Events</Link>
        <Link href="/events">About</Link>
        <Link href="/events">Contact</Link>
        <Link href="/events">Register</Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
