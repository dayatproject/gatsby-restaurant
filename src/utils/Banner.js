import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.75rem" })};
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`

Banner.defaultProps = {
  title: "default title",
}

export default Banner
