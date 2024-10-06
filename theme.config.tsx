import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const year = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <strong>Traveloka Scraper</strong>,
  project: {
    link: 'https://github.com/IndraSty/traveloka-scraper',
  },
  footer: {
    content: `Traveloka Scraper ${year} © IndraSty`,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Traveloka Scraper',
        description: 'Traveloka Scraper | %s',
      };
    }
    return {
      titleTemplate: 'Traveloka Scraper - Web Scraper',
      description:
        "Backend Service Web Scraper",
    };
  },
};

export default config;
