import SvgTg from "@shared/icons/SvgTg";
import SvgWhatsapp from "@shared/icons/SvgWhatsapp";
import { Routes } from "@shared/consts/routes";
import { Button, IconButton, Logo } from "@shared/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useClientSize } from "@shared/lib/hooks";
import SvgBurgerOpen from "@shared/icons/SvgBurgerOpen";

const Header = () => {
  const { getIsBreakpoint } = useClientSize();
  const isWidthMd = getIsBreakpoint("md");
  const isWidthSm = getIsBreakpoint("s");

  return (
    <Root>
      <InnerContainer>
        <Logo />
        {!isWidthMd && (
          <Navigation>
            {Object.values(Routes).map(({ path, name }) => (
              <NavItem key={path} href={path}>
                {name}
              </NavItem>
            ))}
          </Navigation>
        )}

        <Buttons>
          {!isWidthSm && <Button text="ОБСУДИТЬ ПРОЕКТ" />}

          <IconButton IconComponent={SvgTg} />
          <IconButton IconComponent={SvgWhatsapp} />
          {isWidthMd && <IconButton IconComponent={SvgBurgerOpen} />}
        </Buttons>
      </InnerContainer>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  margin-right: 500px;
  z-index: 10;
  width: 100%;
  border-radius: 84px;
  padding: 8px 16px 8px 24px;
  width: 100%;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${({ theme: { colors } }) => colors.additional.purpleLight};
  @media (max-width: 1200px) {
    left: auto;
    right: auto;
    transform: translateX(1%);
    width: 98%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavItem = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default Header;
