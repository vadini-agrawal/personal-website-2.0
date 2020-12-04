import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from 'styled-components';
import Twitter from '../images/twitter.jpeg';
import LinkedIn from '../images/linkedin.png';
import Github from '../images/github.png';
import Email from '../images/email.png';
import { OutboundLink } from "gatsby-plugin-google-gtag";

const Styles = Styled.div`
  .footer {
    text-align: center;
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
    transition: 0.5s ease;
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
  .icons img:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.5s ease;
  }
`;


const Footer = () => (
    <Styles>
         <div className="footer">
          <div className="icons">
              <OutboundLink href="https://twitter.com/a_vadini" target="_blank">
                  <img  src={Twitter} /> 
              </OutboundLink>
              <OutboundLink href="http://www.github.com/vadini-agrawal" target="_blank">
                  <img  src={Github} /> 
              </OutboundLink>
              <OutboundLink href="mailto:vadini101@gmail.com" target="_blank">
                  <img  src={Email} /> 
              </OutboundLink>
              <OutboundLink href="http://www.linkedin.com/in/vadini-agrawal" target="_blank">
                <img  src={LinkedIn} /> 
              </OutboundLink>
          </div>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link> & <Link to="https://www.sanity.io">Sanity</Link>
          </p>
          </div>
    </Styles>
)

export default Footer;