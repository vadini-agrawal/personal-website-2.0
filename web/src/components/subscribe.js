import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';

const Styles = Styled.section`
    margin: 0px;
    .input-box {
        border: 1px solid black;
        height: 40px;
        margin-left: 15px;
        margin-right: 15px;
        padding: 10px;
        width: 250px;
    }

    .submitButton {
        background-color: white;
        border: 1px solid black;
        height: 30px;
        margin-top: 15px;
        width: 100px;
    }

    @media only screen and (max-width: 800px) {
        .submitButton {
            margin-top: 15px;
            margin: 0px;
        }
      }

    .submitButton:hover {
        background-color:  #104d6c;
        border: none;
        color: white;
    }
        
    .subscribe {
        margin: 0px;
        text-align: center;
    }

    .powered {
        color: black;
        font-size: 12px;
        text-decoration: none;
    }

    .powered:hover {
        color: #104d6c;
    }
`;


const Subscribe = () => (
  <Styles>
    <p className="subscribe">Subscribe for updates!</p>
    <form style={{marginBottom: "0px", padding:"3px", textAlign:"center"}} action="https://tinyletter.com/vadini-agrawal" method="post" target="popupwindow" onSubmit="window.open('https://tinyletter.com/vadini-agrawal', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
  <label className="label" for="tlemail">Your email</label><input className="input-box" type="text" name="email" id="tlemail" />
    <input type="hidden" value="1" name="embed"/><input className="submitButton" type="submit" value="Subscribe" /><p style={{marginBottom: "0px"}}>
        <a className="powered" href="https://tinyletter.com" target="_blank">powered by TinyLetter</a></p>
    </form>
  </Styles>
)

export default Subscribe
