import SvgTg from "@shared/icons/SvgTg";
import SvgWhatsapp from "@shared/icons/SvgWhatsapp";
import { Button, IconButton } from "@shared/ui";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Contacts = () => {
  return (
    <Root>
      <Bubbles>
        <StyledImage
          src="/assets/contacts.png"
          alt="Bubbles"
          layout="fill"
          objectFit=""
          priority
        />
      </Bubbles>
      <Wrapper>
        <div className="container">
          <Row>
            <Category>[ Контакты ]</Category>
            <Title>Давайте обсудим ваш проект?</Title>
          </Row>
        </div>
        <Container>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ContactsContainer>
              <ContactTitle>Заполните форму и мы свяжемся с вами</ContactTitle>
              <Input placeholder="Имя" />
              <Input placeholder="+7 (___) ___-__-__" />
              <Button isFullWight text="ОБСУДИТЬ ПРОЕКТ" />
              <Options>
                <OptionTitle>или напишите нам</OptionTitle>
                <Flex>
                  <IconButton IconComponent={SvgTg} />
                  <IconButton IconComponent={SvgWhatsapp} />
                </Flex>
              </Options>
            </ContactsContainer>
          </div>
        </Container>
      </Wrapper>
    </Root>
  );
};

const Root = styled.section`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 140px;
`;

const Category = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.additional.category};
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
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Bubbles = styled.div`
  position: absolute;
  width: 45%;
  height: 60%;
  bottom: 0px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ContactsContainer = styled.div`
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 0 130px 30px #fff;
  background: #fff;
  max-width: 529px;
  margin-bottom: 100px;
`;

const ContactTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #282828;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.additional.purple};
  border-radius: 11px;
  padding: 16px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  margin-bottom: 12px;
  &::placeholder {
    color: rgba(86, 86, 86, 0.7);
  }
`;
const OptionTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #282828;
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default Contacts;
