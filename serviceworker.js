// use Workbox-SW to cache resources (see https://stackoverflow.com/questions/46830493/is-there-any-way-to-cache-all-files-of-defined-folder-path-in-service-worker/46891749#46891749)
// I use Stale-while-revalidate to get updates e.g. for images in background while still using the cached img at the moment (see https://developers.google.com/web/tools/workbox/modules/workbox-strategies)
importScripts('https://unpkg.com/workbox-sw@0.0.2/build/importScripts/workbox-sw.dev.v0.0.2.js');
importScripts('https://unpkg.com/workbox-runtime-caching@1.3.0/build/importScripts/workbox-runtime-caching.prod.v1.3.0.js');
importScripts('https://unpkg.com/workbox-routing@1.3.0/build/importScripts/workbox-routing.prod.v1.3.0.js');

const assetRoute = new workbox.routing.RegExpRoute({
    regExp: new RegExp('^https://afdia.github.io/chowdown/*'),
    handler: new workbox.runtimeCaching.StaleWhileRevalidate()
});

const router = new workbox.routing.Router();
//router.addFetchListener();
router.registerRoutes({routes: [assetRoute]});
router.setDefaultHandler({
    handler: new workbox.runtimeCaching.StaleWhileRevalidate()
});