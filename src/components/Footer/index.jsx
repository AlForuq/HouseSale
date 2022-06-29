import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactDetail,
  ContactWrapper,
  Container,
  CopyRight,
  Facebok,
  FooterWrapper,
  IconDiv,
  InfoText,
  Instagram,
  LinkedIn,
  Logo,
  MailIcon,
  MainWrapper,
  MapIcon,
  PhoneIcon,
  Section,
  SocialIcons,
  TitleInfo,
  Twitter,
  Wrapper,
} from "./style";


export const Footer = () => {
  const navigate = useNavigate()
  return (
    <MainWrapper>
      <Container>
        <FooterWrapper>
          <Section>
            <TitleInfo>Contact Us</TitleInfo>

            <Wrapper>
              <ContactWrapper>
                <MapIcon />
                <ContactDetail>
                  <InfoText>
                    329 Queensberry Street, North Melbourne VIC 3051, Australia.
                  </InfoText>
                </ContactDetail>
              </ContactWrapper>

              <ContactWrapper>
                <PhoneIcon />
                <ContactDetail>
                  <InfoText>+998 94 006 76 50</InfoText>
                </ContactDetail>
              </ContactWrapper>

              <ContactWrapper>
                <MailIcon />
                <ContactDetail>
                  <InfoText>muhammd.alforuq@gmail.com</InfoText>
                </ContactDetail>
              </ContactWrapper>
            </Wrapper>

            <SocialIcons>
              <IconDiv>
                <Facebok />
              </IconDiv>
              <IconDiv>
                <Twitter />
              </IconDiv>
              <IconDiv>
                <Instagram />
              </IconDiv>
              <IconDiv>
                <LinkedIn />
              </IconDiv>
            </SocialIcons>
          </Section>

          <Section>
            <TitleInfo>Discover</TitleInfo>
            <Wrapper>
              <InfoText>Chicago</InfoText>
              <InfoText>Los Angels</InfoText>
              <InfoText>Miami</InfoText>
              <InfoText>New York</InfoText>
            </Wrapper>
          </Section>

          <Section>
            <TitleInfo>Lists By Category</TitleInfo>
            <Wrapper>
              <InfoText>Apartments</InfoText>
              <InfoText>Condos</InfoText>
              <InfoText>Houses</InfoText>
              <InfoText>Offices</InfoText>
              <InfoText>Retail</InfoText>
              <InfoText>Villas</InfoText>
            </Wrapper>
          </Section>

          <Section>
            <TitleInfo>Lists By Category</TitleInfo>
            <Wrapper>
              <InfoText>About Us</InfoText>
              <InfoText>Terms & Conditions</InfoText>
              <InfoText>Support Center</InfoText>
              <InfoText>Contact Us</InfoText>
            </Wrapper>
          </Section>
        </FooterWrapper>
      </Container>
      <Container>
        <CopyRight>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Housing</Logo.Title>
          </Logo>
          <InfoText>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </InfoText>
        </CopyRight>
      </Container>
    </MainWrapper>
  );
};
