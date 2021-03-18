import React from "react";
import styled from "styled-components";
import Photo from "./moi.jpg";
import { SiGmail, SiLinkedin } from "react-icons/si";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  @media screen and (max-width: 846px) {
    margin: 0 0 10px;
  }
`;
const PhotoProfil = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-size: 100%;
  margin-bottom: 20px;
`;
const SocialIconLink = styled.a`
  color: #000;
  font-size: 2rem;
  margin-right: 20px;
  transform: perspective(1px) translateZ(0);
  transition: transform 0.3s ease-out;
  display: inline-block;
  &:hover {
    transform: translateY(-8px);
  }
`;
const Gmail = styled(SiGmail)`
  color: red;
`;
const Linkedin = styled(SiLinkedin)`
  color: #027ab6;
`;
const Picture = () => {
  return (
    <Wrapper>
      <PhotoProfil src={Photo} alt='Alexandre' />
      <div className='links'>
        <SocialIconLink
          href='http://www.linkedin.com/pub/alexandre-ly/61/368/894'
          aria-label='Linkedin'
        >
          <Linkedin />
        </SocialIconLink>
        <SocialIconLink
          href='mailto:contact.alexly@gmail.com'
          aria-label='Gmail'
        >
          <Gmail />
        </SocialIconLink>
      </div>
    </Wrapper>
  );
};

export default Picture;
