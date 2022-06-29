import styled from 'styled-components'
import {BiMap} from 'react-icons/bi'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: var(--primaryColor);
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  gap: 50px;
  width: var(--width);
  padding: 48px 130px 24px 130px;

`;

export const Section = styled.div` 
    display:flex;
    flex-direction: column;
    gap: 32px;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;


export const InfoText = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export const TitleInfo = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const MapIcon = styled(BiMap)` 
width: 20px;
height:20px;
color: #fff;
`
export const PhoneIcon = styled(BsTelephone)`
  width: 20px;
  height: 20px;
  color: #fff;
`;
export const MailIcon = styled(MdOutlineMail)`
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const SocialIcons = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 182px;
`

export const Facebok = styled(ImFacebook)`
  width: 20px;
  height: 20px;
  color:#fff;
`;

export const Twitter = styled(BsTwitter)`
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const Instagram = styled(BsInstagram)`
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const LinkedIn = styled(GrLinkedinOption)`
  width: 20px;
  height: 20px;
  color: #fff;
  /* z-index: 2; */
`;

export const IconDiv = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;

  width: 40px;
  height: 40px;
  :hover {
    background: #253c4f;
    border-radius: 3px;
  }
  :active{
    transform: scale(0.95)
  }
`;


export const ContactDetail = styled.div` 
  display: flex;
  justify-content: space-between;
  max-width: 182px;
  /* min-width: fit-content; */
`

export const ContactWrapper = styled.div` 
  display:flex;
  gap: 21px;
`

export const CopyRight = styled(FooterWrapper)`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 130px 16px 130px;
  align-items: center;
`;

export const Logo = styled.div` 
    display:flex;
    cursor: pointer;
`

Logo.Icon = styled(logoIcon)``

Logo.Title = styled.div`
  margin-left: 11px;
  font-size: 19px;
  font-weight: 500;
  color: #fff;


`