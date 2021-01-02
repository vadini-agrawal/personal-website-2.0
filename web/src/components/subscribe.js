import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';

const Styles = Styled.section`
    .iframe {
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`;


const Subscribe = () => (
  <Styles>
    <div className="iframe">
        <p>Subscribe to my newsletter for updates:</p>
        <iframe src="https://vadini.substack.com/embed" width="500" height="180" style={{border:"1px solid #EEE", background:"white"}} frameborder="0" scrolling="no"></iframe>
    </div>
  </Styles>
)

export default Subscribe
