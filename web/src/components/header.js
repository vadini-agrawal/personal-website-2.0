import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';

const Styles = Styled.section`
  .header {
    // background-color: orange;
    marginBottom: 1.45rem;
    height: 70px;
    padding: 15px;
    font-family: 'Josefin Sans', sans-serif;
    padding-right: 10%;
    padding-left: 10%;
    position: fixed;
    top: 0;
    width: 100%
  }
  .links {
    float: right;
    padding-top: 10px;
  }
  .link {
    color: black;
    text-decoration: none;
    margin-right: 25px;
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;

  }
  .link:hover {
    color: #f9a743;
  }
  .header .link {
    float: left;
  }
  .logo_img {
    height: 40px;
    width: 40px;
    margin: auto;
  }
`;


const Header = ({ siteTitle }) => (
  <Styles>
  <div className="header"
  >
    <Link to="/"
          className="link-logo">
      <img className="logo_img" alt="my logo" src={MyLogo} />
    </Link>
    <div className="links">
        <Link
          to="/"
          className="link"
        >
          HOME
        </Link>
        <Link
          to="#projects"
          className="link"
        >
          PROJECTS
        </Link>
        <Link
          to="#blog"
          className="link"
        >
          BLOG
        </Link>
      </div>
  </div>
  </Styles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
