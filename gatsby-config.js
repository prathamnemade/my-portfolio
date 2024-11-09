module.exports = {
  siteMetadata: {
    description: "Prathamesh's Porfolio",
    image: "./src/images/prathamesh-icon.jpg",
    siteUrl: "https://prathameshnemade.com/",
    title: "Prathamesh Nemade",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Prathamesh Nemade',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/prathamesh-icon.jpg',
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-204286837-2",
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
