// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juzi Bot',
  tagline: 'Next Generation IM based Marketing Cloud',
  url: 'https://tech-blog.juzibot.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'juzibot',
  projectName: 'tech-blog',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/juzibot/tech-blog',
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          editUrl: 'https://github.com/juzibot/tech-blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        disableInDev: false,
      },
    ]
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      zh: {
        htmlLang: 'zh-CN',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Juzi Bot',
        logo: {
          alt: 'Juzi Bot Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Blog', position: 'left' },
          // TODO: api docs is working in progress, will enable later.
          // { type: 'doc', docId: 'intro', position: 'left', label: 'API Docs' },
          { href: 'https://github.com/juzibot/tech-blog', label: 'GitHub', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
          title: 'More',
          items: [
            { label: 'Learn About Juzi Bot', to: 'https://juzibot.com' },
            { label: 'GitHub', href: 'https://github.com/juzibot' },
          ],
        }],
        copyright: `Copyright © ${new Date().getFullYear()} Juzi Bot Inc.`,
      },
      image: '/img/logo.svg',
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
