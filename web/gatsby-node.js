const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
async function createBlogPostPages (graphql, actions, reporter) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityBlogPost {
            edges {
              node {
                id
                _rawBody
                subtitle
                title
                _createdAt
                linkStub
                mainImage {
                  asset {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
      }
    `)
  
    if (result.errors) throw result.errors
  
    const postEdges = (result.data.allSanityBlogPost || {}).edges || []
  
    postEdges.forEach((edge, index) => {
      const { id, linkStub } = edge.node
    //   const dateSegment = format(_createdAt, 'YYYY-MM')
      const path = `/blog/${linkStub}`
      console.log(id)
      reporter.info(`Creating blog post page: ${path}`)
  
      createPage({
        path,
        component: require.resolve('./src/template/blog-post.js'),
        context: { id }
      })
    })
  }

async function createBlogPage (graphql, actions, reporter) {
    const { createPage } = actions
    path = `/blog`
    createPage({
        path,
        component: require.resolve('./src/pages/blog.js')
    })
  }

async function createProjectPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
        allSanityProject {
            edges {
            node {
                id
                dates
                description
                mainImage {
                asset {
                  fluid {
                    src
                    }
                  }
                }
                subtitle
                title
                tech
                url
                _rawLongDescription
            }
            }
        }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityProject || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, title } = edge.node
    const string = 'project-';
    const title_s =  title.replace(/ /g, "-");
    const title_stub = string.concat(title_s);
  //   const dateSegment = format(_createdAt, 'YYYY-MM')
    const path = `/${title_stub}`
    reporter.info(`Creating project page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/template/project-modal.js'),
      context: { id }
    })
  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
    // await createBlogPostPages(graphql, actions, reporter)
    await createBlogPostPages(graphql, actions, reporter)
    await createBlogPage(graphql, actions, reporter)
    await createProjectPages(graphql, actions, reporter)
}