import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import anime from 'animejs'

import styled from 'styled-components'
import { theme, mixins } from '../styles'
import IconLogo from '../images/logo'
class Loader extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
  }

  state = {
    isMounted: false,
  }

  componentDidMount() {
    this.setState({ isMounted: true }, () => this.animate())
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  animate() {
    const loader = anime.timeline({
      complete: () => this.props.finishLoading(),
    })

    loader
      .add({
        targets: '#logo path',
        delay: 500,
        duration: 2000,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #letter',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      })
  }

  render() {
    const { isMounted } = this.state

    return (
      <LoaderContainer className="loader">
        <Helmet>
          <body className={isMounted ? 'hidden' : ''} />
        </Helmet>
        <LogoWrapper isMounted={isMounted}>
          <IconLogo />
        </LogoWrapper>
      </LoaderContainer>
    )
  }
}

export default Loader

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${theme.colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${(props) => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #letter {
      opacity: 0;
    }
  }
`
