import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import "../StyleSection/Footer.css"
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
  EmailRounded,
  PhoneRounded,
  WhatsApp,
  ArrowForward,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  margin-top:8px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 4rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  font-size: 4rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1rem;
`;
const ContactInfo = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
     color: rgb(255, 155, 155);
  }
`;
const Copyright = styled.p`
  margin-top: 0.5rem;
  padding:0.5rem;
  border-top:2px solid white;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Footer = () => {
  return (
    <div>
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <LinksContainer>
            <Nav>
              <NavLink href="#About">< ArrowForward className="arrow"/>About</NavLink>
              <NavLink href="#Skills">< ArrowForward className="arrow" />Skills</NavLink>
              <NavLink href="#Experience">< ArrowForward className="arrow"/>Experience</NavLink>
              <NavLink href="#Projects">< ArrowForward className="arrow"/>Projects</NavLink>
              <NavLink href="#Education">< ArrowForward className="arrow"/>Education</NavLink>
              <NavLink href="#contact">< ArrowForward className="arrow"/>Contact</NavLink>
            </Nav>
            
          </LinksContainer>
          <ContactContainer>
            <ContactInfo>
              <PhoneRounded className="arrow"/> Phone: <ContactLink href="tel:+917766968284">+91 7766968284</ContactLink>
            </ContactInfo>
            <ContactInfo>
              <EmailRounded className="arrow"/>Email: <ContactLink href="mailto:shubhamkumargarg57@gmail.com">shubhamkumargarg57@gmail.com</ContactLink>
            </ContactInfo>
            <ContactInfo>
             <WhatsApp className="arrow"/> WhatsApp: <ContactLink href="https://wa.me/917766968284" target="_blank">+91 7766968284</ContactLink>
            </ContactInfo>
          </ContactContainer><SocialMediaIcons>
              <SocialMediaIcon href={Bio.facebook} target="_blank">
                <FacebookRounded style={{ fontSize: '2.8rem' }}/>
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="_blank">
                <Twitter style={{ fontSize: '2.8rem' }} />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="_blank">
                <LinkedIn  style={{ fontSize: '2.8rem' }}/>
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="_blank">
                <Instagram style={{ fontSize: '2.8rem' }} />
              </SocialMediaIcon>
            </SocialMediaIcons>
        </FooterContent>
       
      </FooterWrapper>
       
    </FooterContainer>
    <Copyright>&copy; 2024 Shubham kumar garg. All rights reserved.</Copyright>
 </div>
  );
};

export default Footer;
