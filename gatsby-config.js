module.exports = {
  siteMetadata: {
    title: "Madhav Aryal",
    siteUrl: "https://aryalmadhav.com.np",
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
        trackingId: "UA-176139134-2",
        head: false,
      },
    },
  ],
  pathPrefix: "/public",
};
