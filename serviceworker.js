// LOKAL SETUP:
// https://developer.chrome.com/docs/workbox/modules/workbox-sw/#using-local-workbox-files-instead-of-cdn
// https://developer.chrome.com/docs/workbox/modules/workbox-sw/#using-workbox-sw-via-cdn
// Für Update folgendes Aufrufen: "npx workbox - cli copyLibraries js /""
importScripts('https://afdia.github.io/chowdown/js/workbox-v6.5.4/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://afdia.github.io/chowdown/js/workbox-v6.5.4/',
});
workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('https://afdia.github.io/chowdown/'),
    new workbox.strategies.StaleWhileRevalidate()
);