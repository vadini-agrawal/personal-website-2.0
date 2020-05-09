import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';

const Styles = Styled.section`
  .footer {
    display: flex;
    margin-top: 5vh;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    padding-bottom: 3vh;
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
          <br />  <br />
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby & Sanity </Link>
          </p>
          </div>
     </div>
    </Styles>
)

export default Footer

  {/* <div class="copyright-text"> 
      <a class="contact-link" href="http://www.linkedin.com/in/vadini-agrawal" target="_blank">
          <img class="contact-icon" src="https://d33wubrfki0l68.cloudfront.net/c0c3cbbfb31db70e76ea42c92ae55ec68b801d5b/fd624/linkedin.svg"> 
      </a>
      <a class="contact-link" href="http://www.github.com/vadini-agrawal" target="_blank">
          <img class="contact-icon" src="https://d33wubrfki0l68.cloudfront.net/f3149af77dad25218e9992b719953fb8efb32b78/3adfa/github.svg"> 
      </a>
      <a class="contact-link" href="mailto:vadini@gatech.edu" target="_blank">
          <img class="contact-icon" src="https://d33wubrfki0l68.cloudfront.net/df7aaa4c3dfc864755d83193b8418cf9a6e3a0b8/03dbe/mail.svg"> 
      </a>
      <a class="contact-link" href="https://twitter.com/@a_vadini" target="_blank">
          <img class="contact-icon" src="https://d33wubrfki0l68.cloudfront.net/0e267bfec1fd7aee0481f47707232bd0dfe9aa63/29cfc/twitter.png"> 
      </a>
      <a class="contact-link" href="http://medium.com/@vadini/" target="_blank">
          <img class="contact-icon" src="https://d33wubrfki0l68.cloudfront.net/dfbff2e45d03aa48287ba3b8419960c67777d5fd/a9099/medium.png"> 
      </a>
  </div> */}