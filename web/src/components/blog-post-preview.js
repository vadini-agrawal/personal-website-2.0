import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import Styled from 'styled-components'
import "./layout.css"


const Styles = Styled.section`
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  a {
    color: black;
  }
  a:hover .title{
    text-decoration: underline;
  }
  a {
    text-decoration: none;
  }
  .title {
    font-size: 28px;
    color: #f9a743;
  }
  .subtitle {
    font-size: 15px;
  }
  
`;

function BlogPostPreview (props) {
  return (
    <Styles>
    <Link to={getBlogUrl(props.linkStub)}>
      <span className="title" >{props.title}</span> <br/>
      <span className="subtitle"> {props.subtitle}</span>
    </Link>
    </Styles>
  )
}

export default BlogPostPreview
