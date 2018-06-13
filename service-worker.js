/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d1861e2c67e837af5acee2502b1a8f5f"
  },
  {
    "url": "assets/css/0.styles.8033c45a.css",
    "revision": "d080f27bf60fe780cf3668c5c434e9c0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8ba2ac71.js",
    "revision": "e986f1929ba17706c8dc263e195004b6"
  },
  {
    "url": "assets/js/2.9b5a1c96.js",
    "revision": "c8eaac0c936c9b662e27b8dcb8b8298a"
  },
  {
    "url": "assets/js/app.4333cb10.js",
    "revision": "d38c167087670d67902d89d9233801f9"
  },
  {
    "url": "header/zh-cn.html",
    "revision": "7dc9c4db9312fde149da8df702607324"
  },
  {
    "url": "index.html",
    "revision": "d047feed39678c3dd8f22367e8a04faa"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
