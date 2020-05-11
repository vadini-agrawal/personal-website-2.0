import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogPost from '../components/blogPost'
import Layout from '../components/layout'

const { format } = require('date-fns')

export const query  = graphql`
  query BlogPostQuery($id: String!) {
    post: sanityBlogPost(id: { eq: $id }) {
      id
      _createdAt
      publishedAt
      mainImage {
        asset {
            fluid {
            src
            }
        }
      }
      title
      subtitle
      _rawBody 
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post

  return (
    <Layout>
      <BlogPost { ...post }/>
    </Layout>
  )
}

export default BlogPostTemplate
