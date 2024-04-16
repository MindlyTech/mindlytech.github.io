import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mindly: Empowering Your Business with AI-Driven Solutions`,
    siteUrl: `https://www.mindly.dev`,
    description:
      "Mindly specializes in AI strategy consulting, custom AI software development, and AI integration services to transform your business operations and enhance efficiency.",
    keywords:
      "AI Consulting Services, AI Strategy Development, Custom AI Solutions, AI Integration Services, Machine Learning Consulting, AI for Business Automation, AI-Driven Data Analytics, Robotic Process Automation, Natural Language Processing, Predictive Analytics Services, AI Change Management, AI Implementation Support, AI Software Development, AI Business Solutions, AI Technology Partners",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "GTM-5D3VWP3", // Google Analytics / GA
        ],
      },
    },
    //    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,200,300,400,500,600,700`, // weights you need
        ],
        display: "swap",
      },
    },
  ],
};

export default config;
