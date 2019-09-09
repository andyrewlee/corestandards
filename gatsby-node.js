const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const lessonTemplate = path.resolve('src/templates/LessonTemplate.js');
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const lessons = result.data.allMarkdownRemark.edges;

  lessons.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: lessonTemplate,
      context: {
        prev: index === 0 ? null : lessons[index - 1].node,
        next: index === (lessons.length - 1) ? null : lessons[index + 1].node,
      },
    });
  });
};
