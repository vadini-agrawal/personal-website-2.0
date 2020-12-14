import React from "react"
import Styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Styles = Styled.section`
font-family: 'Zilla Slab', serif;
margin-top: 20vh;
  height: 40vh;
  padding-top: 8vh;
  text-align: center;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #104d6c;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Styles>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...so sorry about that.</p>
    <a href="/">Back Home</a>
    </Styles>
  </Layout>
)

export default NotFoundPage
