import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

class Footer extends React.Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://wwww.facebook.com",
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://wwww.twitter.com",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://wwww.instagram.com",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">eatery</div>
        <div className="icons">
          {this.state.icons.map(icon => (
            <a
              href={icon.path}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright &copy; 2019 eatery</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin-top: 1rem;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: styles.colors.mainYellow })};
  }
`

export default Footer
