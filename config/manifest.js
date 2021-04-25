'use strict';

module.exports = function () {
  return {
    name: 'PWA APPLICATION',
    short_name: 'PWA APP',
    description: 'Test PWA Application in Ember.js',
    start_url: '/',
    scope: '/',
    display: 'fullscreen',
    background_color: '#262626',
    theme_color: '#262626',
    icons: [
      {
        src: 'assets/images/pwa-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/images/pwa-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'assets/images/maskable-pwa-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/images/maskable-pwa-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    ms: {
      tileColor: '#262626',
    },
  };
};
