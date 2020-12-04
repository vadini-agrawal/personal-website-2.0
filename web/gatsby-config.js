// require('dotenv').config()
// const {
//   api: { projectId, dataset }
// } = requireConfig('../studio/sanity.json')


module.exports = {
  siteMetadata: {
    title: `Vadini Agrawal`,
    description: `My personal website.`,
    author: `Vadini Agrawal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mylogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: "3z0exn80",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.skkgqmyyatwOhjCYJYTdyxraevdL4TcqQMA5dBi9g9xrmu3qgJXHvMRnBKCw4YNPvZ90cDDGIJ5mxhuD6fowQc6cWQjdEhmhusEv80WwrCc6QKgwAVY0xM3l1xR1NMqx18mepfsNSCLMlzZKKaKh8l33PxedjFJnlYyjJYT7H9AwMOaCjjGp,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
       trackingId: process.env.GOOGLE_ANALYTICS_TRACKING,
    },
  },
  ],
}
