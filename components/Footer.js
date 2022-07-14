import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 30px 30px;
  background-color: #0d0f10;
  color: #7c8890;
`;

const StyledFooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 14px;
  background-color: #0d0f10;
  color: #7c8890;
  margin-bottom: 30px;
`;

const StyledSubText = styled.p`
  font-size: 12px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <Link href="/events">About</Link>
        <Link href="/events">Contact</Link>
        <Link href="/events">Register</Link>
      </StyledFooterLinks>
      <StyledSubText>
        Copyright © 2014–2022 Design Systems Coalition, Inc. All rights
        reserved.
      </StyledSubText>
    </StyledFooter>
  );
};

export default Footer;
