import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header``;
const StyledLogo = styled.div``;
const StyledNav = styled.nav``;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Logo</StyledLogo>
      <StyledNav>
        <Link href="/events">Events</Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
