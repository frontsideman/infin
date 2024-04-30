import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from '../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 *
 * @type {prismic.ClientConfig['routes']}
 */
const routes = [
  {
    type: 'home',
    uid: 'home',
    path: '/',
  },
  {
    type: 'settings',
    path: '/',
  },
  {
    type: 'navigation',
    path: '/',
  },
  {
    type: 'contact',
    uid: 'contact',
    path: '/contact',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismic.ClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config) => {
  const client = prismic.createClient(repositoryName, {
    accessToken:
      'MC5aaTQ3UnhJQUFDRUE0Wl96.77-977-9Ju-_vTlG77-977-977-977-9P1Tvv71q77-977-977-9Xe-_ve-_ve-_vQRl77-9Ru-_ve-_vUZj77-977-9Kw',
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
