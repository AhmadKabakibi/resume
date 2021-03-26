import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { srConfig } from '../config'

import styled from 'styled-components'
import { theme, mixins, media, Section, Heading } from '../styles'

import ScrollReveal from 'scrollreveal'

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    ScrollReveal().reveal(this.about, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title, skills, avatar } = frontmatter

    return (
      <AboutContainer id="about" ref={(el) => (this.about = el)}>
        <Heading>{title}</Heading>
        <FlexContainer>
          <ContentContainer>
            <p dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
              {skills &&
                skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
          <PicContainer>
            <AvatarContainer>
              <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
            </AvatarContainer>
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    )
  }
}

export default About

const AboutContainer = styled(Section)`
  position: relative;
`
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smallish};
  color: ${theme.colors.offWhite};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.small};
    line-height: 12px;
  }
`
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`
const Avatar = styled(Img)`
  position: relative;
  filter: none;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`
const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.blue};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.navy};
  }
  &:after {
    border: 2px solid ${theme.colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`
