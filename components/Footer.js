import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer``;

const Footer = () => {
  return (
    <StyledFooter>
      <div>Footer</div>
      <Link href="/about">About</Link>
    </StyledFooter>
  );
};

export default Footer;
