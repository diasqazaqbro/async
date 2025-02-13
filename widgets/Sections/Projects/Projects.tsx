import { BreakpointsEnum } from "@shared/consts/types";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Root>
      <Background>
        <Bubbles>
          <StyledImage
            src="/assets/bubble2.png"
            alt="Bubbles"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Bubbles>
      </Background>
      <div className="container">
        <Wrapper>
          <Category>| Проекты |</Category>
          <Title>
            нам доверяют крупные компании и стартапы: помогаем вдохнуть новую
            жизнь в масштабные проекты или создать продукт с нуля
          </Title>
          <Container>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Container>
        </Wrapper>
      </div>
    </Root>
  );
};

const Root = styled.section`
  width: 100%;
`;

const Background = styled.div`
  position: relative;
`;

const Bubbles = styled.div`
  position: absolute;
  top: -90px;
  left: 50px;
  width: 100%;
  height: 100vh;
  max-height: 1656px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${BreakpointsEnum.md}px) {
    top: -90px;
    left: 0px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
`;

const Category = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.additional.category};
  margin-right: 15%;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 40px;
  text-transform: uppercase;
  color: #282828;
  @media (max-width: 990px) {
    font-size: 32px;
  }
  @media (max-width: 642px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 48px;
  @media (max-width: 640px) {
    gap: 12px;
  }
`;

const Item = styled.div`
  border-radius: 24px;
  padding: 24px;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.4);
  width: 17.9%;
  height: 140px;
  @media (max-width: 1190px) {
    width: 22.5%;
  }
  @media (max-width: 940px) {
    width: 30%;
  }
  @media (max-width: 640px) {
    width: 47%;
  }
`;

export default Projects;
