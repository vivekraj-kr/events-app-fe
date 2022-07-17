import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: #f7ebda;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 12px 30px;
  background-color: ${({ isBgEnabled }) =>
    isBgEnabled ? "#0d0f10" : "transparent"};

  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`;

const StyledLogo = styled.div`
  width: 80px;
  a {
    display: block;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 40px;

  a {
    border: solid 3px transparent;
    transition: all 0.2s ease-in-out;

    @media (max-width: 768px) {
      padding: 12px 0;
    }
  }

  a:hover {
    border-bottom: solid 3px #f00;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    flex-direction: column;
    text-align: center;
    gap: 15px;

    a:hover {
      border: none;
    }
  }
`;

const StyledMenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;

  svg {
    fill: #f7ebda;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useCheckMobileScreen();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (!isMobile) {
      setOpenMenu(true);
    }
  }, [isMobile]);

  const router = useRouter();
  const isLandingPage = router.pathname === "/";
  return (
    <StyledHeader isBgEnabled={!isLandingPage || (isLandingPage && isMobile)}>
      <StyledLogo>
        <Link href="/">
          <a>
            <Image
              width={100}
              height={100}
              src="/images/events-logo.svg"
              alt="Events app logo"
            />
          </a>
        </Link>
      </StyledLogo>
      {isMobile && (
        <StyledMenuButton onClick={handleMenuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
          </svg>
        </StyledMenuButton>
      )}
      {openMenu && (
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
      )}
    </StyledHeader>
  );
};

export default Header;
