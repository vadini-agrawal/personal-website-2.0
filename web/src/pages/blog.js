import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Styled from 'styled-components'

import { responsiveTitle1 } from '../components/typography.module.css'

const Styles = Styled.section`
font-family: 'Josefin Sans', sans-serif;

  .general {
    height: 63vh;
  }
  .body {
    padding-top: 10vh;
    padding-left: 10vw;
    padding-right: 10vw;
  }
  .previews {
    padding-top: none;
    padding-left: 20vw;
    padding-right: 20vw;
  }
  p {
    text-align: center;
  }
  .header {
    font-size: 30px;
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
    <Layout>
      <SEO title='Blog' />
      <div className="general">
      <div className="body">
        <p className="header">Articles</p>
      </div>
      <div className="previews">
      {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </div>
      </div>
    </Layout>
    </Styles>
  )
}

export default BlogPage
