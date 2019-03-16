import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

class QuickInfo extends React.Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta
            voluptatum fugiat quo minima vitae commodi, officia nam
            exercitationem omnis fuga nemo maxime cumque quam impedit dolor
            repudiandae accusantium ea quae! Quia officiis consectetur tempore!
            Asperiores placeat doloremque culpa corporis! Sed cum quaerat
            temporibus, numquam quod aut! Voluptatibus, molestiae perferendis!
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
