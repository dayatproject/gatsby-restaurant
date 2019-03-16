import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import Product from "./Product"
import { Section, Title, SectionButton } from "../../utils"

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <Section>
      <Title title="features items" message="little taste" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            return data.items.edges.map(({ node }) => (
              <Product key={node.id} product={node} />
            ))
          }}
        />
      </ProductList>
      <Link to="/menu" style={{ textDecoration: "none" }}>
        <SectionButton style={{ margin: "0 auto" }}>Menu</SectionButton>
      </Link>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
