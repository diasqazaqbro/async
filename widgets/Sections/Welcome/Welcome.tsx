import { BreakpointsEnum } from "@shared/consts/types";
import SvgTg from "@shared/icons/SvgTg";
import SvgWhatsapp from "@shared/icons/SvgWhatsapp";
import { useClientSize } from "@shared/lib/hooks";
import { Button, IconButton } from "@shared/ui";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Welcome = () => {
  const { getIsBreakpoint } = useClientSize();
  const isWidthMd = getIsBreakpoint("md");

  return (
    <Root>
      <TopContainer>
        <Bubbles>
          <StyledImage
            src={isWidthMd ? "/assets/bubbleMobile.png" : "/assets/bubble1.png"}
            alt="Bubbles"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Bubbles>
      </TopContainer>
      <div className="container">
        <BottomContainer>
          <Buttons>
            <Button text="ОБСУДИТЬ ПРОЕКТ" />
            <IconButton IconComponent={SvgTg} />
            <IconButton IconComponent={SvgWhatsapp} />
          </Buttons>
          <Description>
            Создаём и запускаем продукты для бизнеса: от сайтов <br /> и
            онлайн-сервисов до мобильных приложений
          </Description>
        </BottomContainer>
      </div>
    </Root>
  );
};

const Root = styled.section``;

const TopContainer = styled.div``;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 990px) {
    flex-direction: column-reverse;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #696969;
  @media (max-width: 990px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const Bubbles = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default Welcome;
