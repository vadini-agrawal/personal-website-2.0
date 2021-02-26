import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import Styled from 'styled-components'
import "./layout.css"
import moment from 'moment'


const Styles = Styled.section`
  color: black;
  font-family: 'Zilla Slab', serif;
  a {
    color: black;
  }
  a:hover {
    border-bottom: 0.5px solid #104d6c;
  }
  a:hover .title{
    color: #104d6c;
    padding-bottom: 3px;
  }
  a {
    text-decoration: none;
    padding-bottom: 3px;
    border-bottom: 0.5px solid black;
  }
  .title {
    font-size: 22px;
    color: black; 
  }
  .subtitle {
    font-size: 15px;
  }
  .date {
    margin-right: 10px;
  }
`;

function BlogPostPreview (props) {
  var publishDate = moment(props.publishedAt).format("MMM YY'");
  return (
    <Styles>
    <span className="date"> {publishDate} </span>
    <Link to={getBlogUrl(props.linkStub)}>
      <span className="title" >{props.title}</span> <br/>
      <span className="subtitle"> </span>
    </Link>
    </Styles>
  )
}

export default BlogPostPreview
