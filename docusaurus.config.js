// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shardeum Docs',
  tagline: 'Explore Shardeum Docs',
  url: 'https://docs.shardeum.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Shardeum', // Usually your GitHub org/user name.
  projectName: 'shardeum-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Shardeum/shardeum-docs/tree/master/',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: process.env.GTM_ID || 'GTM-XXXXXXX',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({


      imageZoom: {
     // CSS selector to apply the plugin to, defaults to '.markdown img'
     // selector: '.markdown img',
     // Optional medium-zoom options
     // see: https://www.npmjs.com/package/medium-zoom#options
     options: {
       margin: 40,
       background: '#000',
       scrollOffset: 60,
       // container: 'main',
       // template: '#zoom-template',
     },
   },
      navbar: {
        title: 'Shardeum',
        hideOnScroll: true,
        logo: {
          alt: 'Shardeum Docs Logo',
          src: 'img/shardeum-logo-dark.png',
        },

        items: [

          {
            href: 'https://github.com/shardeum/shardeum-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://forms.gle/BFLXtLn9Urq9KH998',
            label: 'Publicize Your dApp',
            position: 'left',
            className: 'navbar_item_1',
       },
          {
            href: 'https://forms.gle/LzPB7aoHQ6sreABeA',
            label: 'Report Bugs Here',
            position: 'left',
            className: 'navbar_item_2',
          },

          {
            href: '/basics/claim',
            label: 'Claim 100 SHM',
            position: 'left',
            className: 'navbar_item_button',
          },
        ],
      },

      footer: {
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Home',
                to: 'https://shardeum.org',
              },
              {
                href: '/basics/claim',
                label: 'Claim 100 SHM',
                position: 'left',

              },
              {
                label: 'Super Shardians',
                to: 'https://shardeum.org/super-shardian/',
              },
              {
                label: 'Blog',
                to: 'https://shardeum.org/blog',
              },
              {
                label: 'Languages',
                to: 'https://shardeum.org/languages',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                to: 'https://t.me/shardeum',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/gx2SFZDDSM',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/shardeum',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Litepaper',
                to: 'https://shardeum.org/Shardeum-Litepaper.pdf',
              },
              {
                label: 'FAQs',
                to: 'https://docs.google.com/document/d/1RilXqwJN6hupaKdrXhk2RF9gl_DS5qY3uPm6iII3Xyg/edit?usp=sharing',
              },
              {
                label: 'Brand Assets Page',
                to: 'https://drive.google.com/drive/folders/1jdjJNMajHG_QDu_uAXTRrqpXW3AUuiJu',
              },
              {
                label: 'Public Drive Link',
                to: 'https://drive.google.com/drive/folders/1zal5vN3f67Ql-Q8jiSYsp6Nf0xoJuqNI',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'General Inquiries',
                to: 'mailto:hi@shardeum.org',
              },
              {
                label: 'Investment Purpose',
                to: 'mailto:invest@shardeum.org',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/shardeum',
              },
            ],
          },
        ],
        logo: {
          alt: 'Shardeum Logo',
          src: 'img/shardeum_logo_light_square.png',
          href: 'https://github.com/shardeum',
          height: 100,
          width: 100
        },
        copyright: `Copyright © Shardeum ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      }
    }),
  plugins: ['docusaurus-plugin-sass',
              'plugin-image-zoom'],
};



module.exports = config;
