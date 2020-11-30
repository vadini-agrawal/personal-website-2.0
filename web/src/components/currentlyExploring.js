import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"


const Styles = Styled.div`
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: auto;
        margin-top: 4vh;
        margin-bottom: 4vh;
    }
    font-size: 15px;
    p {
        transition: 0.5s ease;
      }
    
    p:hover {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition: 0.5s ease;
      }
`;


const CurrentlyExploring = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityCurrentlyExploring {
                nodes {
                    third_value
                    second_value
                    first_value
                }
            }
        }
    `);

    return (
        <Styles>
          <div className="currentlyExploring">
            <p><i>Currently exploring </i>  🌊</p>
            <ul>
              <li>{data.allSanityCurrentlyExploring.nodes[0].first_value}</li>
              <li>{data.allSanityCurrentlyExploring.nodes[0].second_value}</li>
              <li>{data.allSanityCurrentlyExploring.nodes[0].third_value}</li>
            </ul>
          </div>
        </Styles>
    )

}

export default CurrentlyExploring;