import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Section, styles } from "../../utils"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Gallery = () => {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        return (
          <Section>
            <GalleryWrapper>
              {data.getImages.edges.map(({ node }, index) => (
                <div key={node.id} className={`item item-${index + 1}`}>
                  <Img fluid={node.childImageSharp.fluid} />
                  <p className="info">awesome pizza</p>
                </div>
              ))}
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two"
      "one one three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`

export default Gallery
