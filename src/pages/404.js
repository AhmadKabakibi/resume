import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { theme, mixins, media, Main } from '../styles'

const MainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100vh !important;
`
const Title = styled.h1`
  color: ${theme.colors.green};
  font-family: ${theme.fonts.SFMono};
  font-size: 20vw;
  line-height: 1;
  @media screen and (min-width: 1200px) {
    font-size: 200px;
  }
  ${media.phablet`font-size: 120px;`};
`
const Subtitle = styled.h2`
  font-size: 5vw;
  font-weight: 400;
  @media screen and (min-width: 1200px) {
    font-size: 50px;
  }
  ${media.phablet`font-size: 30px;`};
`
const NotFoundPage = () => (
  <Layout>
    <MainContainer id="content">
      <Title>404</Title>
      <Subtitle>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Subtitle>
    </MainContainer>
  </Layout>
)

export default NotFoundPage
