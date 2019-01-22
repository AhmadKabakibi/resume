import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import About from '../components/about'
import Contact from '../components/Contact'

import styled from 'styled-components'
import { mixins, Main } from '../styles'

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <MainContainer id="content">
        <About data={data.about.edges} />
        <Contact data={data.contact.edges} />
      </MainContainer>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    bio: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/bio/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
