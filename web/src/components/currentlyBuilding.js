import React from 'react'
import Styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from './block-content';


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
    #title {
        transition: 0.5s ease;
      }
    
    #title:hover {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition: 0.5s ease;
      }
`;


const CurrentlyBuilding = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityCurrentlyBuilding {
                nodes {
                    _rawFirstValue
                    _rawSecondValue
                    _rawThirdValue
                }
            }
        }
    `);

    return (
        <Styles>
          <div className="currentlyBuilding">
            <p id="title"><i>Currently building</i> 🔨</p>
            <ul>
                <li>{<BlockContent blocks={data.allSanityCurrentlyBuilding.nodes[0]._rawFirstValue} />}</li>
              <li>{<BlockContent blocks={data.allSanityCurrentlyBuilding.nodes[0]._rawSecondValue} />}</li>
              <li>{<BlockContent blocks={data.allSanityCurrentlyBuilding.nodes[0]._rawThirdValue} />}</li>
            </ul>
          </div>
        </Styles>
    )

}

export default CurrentlyBuilding;