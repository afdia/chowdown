// use Workbox-SW to cache resources (see https://stackoverflow.com/questions/46830493/is-there-any-way-to-cache-all-files-of-defined-folder-path-in-service-worker/46891749#46891749)
// I use Stale-while-revalidate to get updates e.g. for images in background while still using the cached img at the moment (see https://developers.google.com/web/tools/workbox/modules/workbox-strategies)
importScripts('https://afdia.github.io/chowdown/js/workbox-sw.prod.v0.0.2.js');
importScripts('https://afdia.github.io/chowdown/js/workbox-runtime-caching.prod.v1.3.0.js');
importScripts('https://afdia.github.io/chowdown/js/workbox-routing.prod.v1.3.0.js');

const assetRoute = new workbox.routing.RegExpRoute({
    regExp: new RegExp('^https://afdia.github.io/chowdown/*'),
    handler: new workbox.runtimeCaching.StaleWhileRevalidate()
});

const router = new workbox.routing.Router();
//router.addFetchListener();
router.registerRoutes({ routes: [assetRoute] });
router.setDefaultHandler({
    handler: new workbox.runtimeCaching.StaleWhileRevalidate()
});