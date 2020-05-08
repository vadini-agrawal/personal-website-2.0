import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Styled from 'styled-components';

const Styles = Styled.section`
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  color: #3b4045;
  font-family: "Josefin Sans",sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Styles>
    <div >
      <h1 > Hi! <br/> I'm Vadini Agrawal.</h1>
      <h3>I'm a product-oriented, purpose-driven computer science student. </h3>
      <a  href="#" target="_blank" role="button" download="">Download my resume!</a>
	  </div>
    </Styles>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
