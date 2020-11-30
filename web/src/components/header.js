import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';

const Styles = Styled.section`
  .header {
    background-color: white;
    marginBottom: 1.45rem;
    height: 70px;
    padding: 15px;
    font-family: 'Zilla Slab', serif;
    padding-right: 10%;
    padding-left: 10%;
    position: fixed;
    z-index: 102;
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
    font-family: 'Zilla Slab', serif;
  }
  @media only screen and (max-width: 600px) {
    .link {
      font-size: 12px;
      margin-right: 15px;
    }
  }
  .link:hover {
    color: #104d6c;
  }
  .header .link {
    float: left;
  }
  .logo_img {
    height: 40px;
    width: 40px;
    margin: auto;
    box-shadow: 5px;
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
          to="/writing"
          className="link"
        >
          WRITING
        </Link>
      </div>
  </div>
  </Styles>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
