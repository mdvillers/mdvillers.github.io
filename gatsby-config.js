module.exports = {
  siteMetadata: {
    title: "Madhav Aryal",
    siteUrl: "http://aryalmadhav.com.np",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Signika`, `source sans pro\:300,400,600`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130172537-1",
        head: false,
      },
    },
  ],
  pathPrefix: "/",
};
