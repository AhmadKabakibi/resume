import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { srConfig, email } from '../config'

import styled from 'styled-components'
import { mixins, media, Section } from '../styles'

import ScrollReveal from 'scrollreveal'

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <ContactContainer id="contact" ref={(el) => (this.contact = el)}>
        <Title>{title}</Title>
        <p dangerouslySetInnerHTML={{ __html: html }} />
        <EmailLink
          href={`mailto:${email}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Say Hello
        </EmailLink>
      </ContactContainer>
    )
  }
}

export default Contact

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`
