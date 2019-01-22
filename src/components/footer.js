import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { socialMedia } from '../config'

import styled from 'styled-components'
import { theme, mixins, media } from '../styles'

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <SocialItem key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === 'Github' ? (
                  <FaGithub />
                ) : name === 'Linkedin' ? (
                  <FaLinkedin />
                ) : name === 'Twitter' ? (
                  <FaTwitter />
                ) : (
                  ''
                )}
              </SocialLink>
            </SocialItem>
          ))}
      </SocialItemList>
    </SocialContainer>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${theme.colors.darkNavy};
  color: ${theme.colors.slate};
  text-align: center;
  height: auto;
`
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`
const SocialItem = styled.li``
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`
