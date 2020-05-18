import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';
import Twitter from '../images/twitter.svg';
import Medium from '../images/medium.svg';
import LinkedIn from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Email from '../images/email.svg';

const Styles = Styled.section`
  .footer {
    background-color: #f4f4f4;
    display: flex;
    padding-top: 5vh;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    padding-bottom: 3vh;
    height: 400px;
    position: relative;
  }
  .inside {
      margin: auto;
  }
  .link {
    color: black;
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;

    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
  }
  .link:hover {
    color: #f9a743;
  }
  .logo_img {
    height: 40px;
    width: 40px;
    margin: auto;
  }
  p {
      font-size: 15px;
  }
  .icons img {
    height: 35px;
    width: 35px;
    display: inline-block;
    margin: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    .icons img {
      height: 25px;
      width: 25px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;


const Footer = () => (
    <Styles>
        <div className="footer">
            <div className="inside">
            <Link to="/"
                className="link-logo">
            <img className="logo_img" alt="my logo" src={MyLogo} />
            </Link>  
            <br /> <br /> 
          <Link className="link" to="/">
             HOME
          </Link>
          <Link className="link" to="#projects">
             PROJECTS
          </Link>
          <Link className="link" to="/blog">
             BLOG
            </Link>
          <div className="icons">
              <a href="http://www.linkedin.com/in/vadini-agrawal" target="_blank">
                <img  src={LinkedIn} /> 
              </a>
              <a href="http://www.github.com/vadini-agrawal" target="_blank">
                  <img  src={Github} /> 
              </a>
              <a href="mailto:vadini@gatech.edu" target="_blank">
                  <img  src={Email} /> 
              </a>
              <a href="https://twitter.com/@a_vadini" target="_blank">
                  <img  src={Twitter} /> 
              </a>
              <a  href="http://medium.com/@vadini/" target="_blank" style={{'border-radius': '4px'}}>
                  <img  src={Medium} /> 
              </a>
          </div>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link> & <Link to="https://www.sanity.io">Sanity</Link>
          </p>
          </div>
     </div>
    </Styles>
)

export default Footer

  {/* <div class="copyright-text"> 

  </div> */}