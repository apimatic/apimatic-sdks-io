// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SDKs.io',
  tagline: 'Creating SDKs, Connecting APIs',
  url: 'https://sdks.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Turn off indexing until the site is ready for release.
  noIndex: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apimatic', // Usually your GitHub org/user name.
  projectName: 'apimatic-sdks-io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/apimatic/apimatic-sdks-io/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/apimatic/apimatic-sdks-io/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BXK6TMY6JY',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SDKs.io',
        logo: {
          alt: 'Creating SDKs',
          src: 'img/logo.svg',
          height: '60px'
        },
        items: [
          {to: '/docs/introduction', label: 'Introduction', position: 'left'},
          {to: '/docs/best-practices/overview', label: 'Best Practices', position: 'left'},
          {to: '/docs/ways-to-build-sdks', label: 'Ways to Build', position: 'left'},
          {to: '/docs/industry-research/', label: 'Industry Research', position: 'left'},   
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.apimatic.io',
            html: '<span>Powered by </span><img src="https://blogwp.apimatic.io/wp-content/uploads/2021/12/apimatic-logo-1.svg" alt="APIMatic logo" />',
            position: 'right',
            className: 'powered-logo'
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/category/introduction',
              },
              {
                label: 'Best Practices',
                to: '/docs/category/best-practices',
              },
              {
                label: 'Ways to build SDKs',
                to: '/docs/category/ways-to-build-sdks',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/apimatic',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apimatic/apimatic-sdks-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SDKs.io - Built with ❤️ by APIMatic`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['http', 'php', 'csharp', 'java', 'ruby'],
      },
    }),
};

module.exports = config;
