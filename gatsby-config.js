module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'lessons',
        path: `${__dirname}/src/lessons`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
  ],
};
