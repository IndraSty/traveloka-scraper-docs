import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const year = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <strong>Traveloka Scraper</strong>,
  project: {
    link: 'https://github.com/IndraSty/traveloka-scraper',
  },
  footer: {
    content: `Traveloka Scraper ${year} © IndraSty`,
  },
};

export default config;
