module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Prathamesh Nemade",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-B7FLPPFNK2",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "settings",
        path: "./src/settings/",
      },
      __key: "settings",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
      __key: "projects",
    },
  ],
};
