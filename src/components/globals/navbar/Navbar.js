import React from "react"
import styled from "styled-components"
import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"

class Navbar extends React.Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(prevState => {
      return { navbarOpen: !prevState.navbarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
