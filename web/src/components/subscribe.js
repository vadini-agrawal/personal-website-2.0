import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components';
import MyLogo from '../images/mylogo.png';

const Styles = Styled.section`
    margin: 0px;
    .input-box {
        height: 40px;
        width: 250px;
        padding: 10px;
        border: 1px solid black;
    }

    .label {
        margin-right: 15px;
    }

    .submitButton {
        border: 1px solid black;
        margin-left: 15px;
        width: 100px;
        height: 30px;
        background-color: white;
    }

    @media only screen and (max-width: 800px) {
        .submitButton {
            margin: 0px;
            margin-top: 15px;
        }
      }

    .submitButton:hover {
        background-color:  #104d6c;
        color: white;
        border: none;
    }
    .powered {
        text-decoration: none;
        font-size: 12px;
        color: black;
    }
    .powered:hover {
        color: #104d6c;
    }
    .subscribe {
        text-align: center;
        margin: 0px;
        margin-top: 20px;
    }
`;


const Subscribe = () => (
  <Styles>
    <p className="subscribe">Subscribe for updates!</p>
    <form style={{marginBottom: "0px", padding:"3px", textAlign:"center"}} action="https://tinyletter.com/vadini-agrawal" method="post" target="popupwindow" onSubmit="window.open('https://tinyletter.com/vadini-agrawal', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
  <label className="label" for="tlemail">Email address</label><input className="input-box" type="text" name="email" id="tlemail" />
    <input type="hidden" value="1" name="embed"/><input className="submitButton" type="submit" value="Subscribe" /><p style={{marginBottom: "0px"}}>
        <a className="powered" href="https://tinyletter.com" target="_blank">powered by TinyLetter</a></p>
    </form>
  </Styles>
)

export default Subscribe
