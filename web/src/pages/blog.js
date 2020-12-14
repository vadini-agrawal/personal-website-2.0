import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import SEO from '../components/seo'
import Styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Ocean from "../images/oceanblue.jpeg";

const Styles = Styled.section`
  font-family: 'Zilla Slab', serif;

  .anti {
    position: relative;
    padding: none;
  }
  .general {
    height: auto;
  }
  .body {
    padding-top: 5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    height: auto;
    margin-bottom: 8vh;
  }
  .previews {
    padding-top: none;
    padding-left: 15vw;
    padding-right: 15vw;
  }
  @media only screen and (max-width: 700px) {
    .previews {
      margin-left: 0vw;
      margin-right: 0vw;
    }
  }

  p {
    text-align: center;
  }
  .header {
    font-size: 30px;
  }

  .headerImage {
    display: inline-block;
    min-height: 250px;
    max-height:250px;
    min-width: 100%;
    object-fit: cover;
  }
`;


const BlogPage = props => {

  const query = useStaticQuery(graphql`
  query BlogPageQuery {
    posts: allSanityBlogPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
          }
          title
          subtitle
          linkStub
        }
      }
    }
  }
  `);
  const postNodes = mapEdgesToNodes(query.posts);
  return (
    <Styles>
      <SEO title='Writing | Vadini Agrawal' description="Vadini's writing ✍🏽" link="https://www.vadiniagrawal.com/writing"/>
      <div className="anti">
        <Header />
      </div>
      <div>
      <img className="headerImage" src={Ocean}/>
    </div>
      <div className="general">
      <div className="body">
        <p className="header">Articles</p>
        <div className="previews">
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
        </div>
      </div>
      <Footer />
      </div>
    </Styles>
  )
}

export default BlogPage
