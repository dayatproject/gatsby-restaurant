import React from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

class NavbarIcons extends React.Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://facebook.com",
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://twitter.com",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://instagram.com",
      },
    ],
  }

  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(icon => (
          <a
            key={icon.id}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transObject({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
