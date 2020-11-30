import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'
import Styled from 'styled-components';
import "./layout.css";

const Styles = Styled.section`
  font-family: 'Zilla Slab', serif;

  ul {
    list-style: none;
    margin-top: none;
  }
`;

function BlogPostPreviewGrid (props) {
  return (
    <Styles>
    <div >
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
    </Styles>
  )
}

BlogPostPreviewGrid.defaultProps = {
  nodes: []
}

export default BlogPostPreviewGrid
