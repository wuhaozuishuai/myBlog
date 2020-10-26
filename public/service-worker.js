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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ad596a836ccaef9794f6dc40229c12b3"
  },
  {
    "url": "assets/css/0.styles.d02d1ece.css",
    "revision": "f57ab86696411fc6113a3151445922fc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/Veronica01.fea3f8f4.png",
    "revision": "fea3f8f42d0a4623b65a87a9e14dd35a"
  },
  {
    "url": "assets/img/Veronica02.271a8e3c.png",
    "revision": "271a8e3cbe24c9e9f293c0cd47a10154"
  },
  {
    "url": "assets/img/Veronica03.6156e0b2.png",
    "revision": "6156e0b2b6ccdc94806e4b8d3f6411bd"
  },
  {
    "url": "assets/img/Veronica04.c63c8bf1.png",
    "revision": "c63c8bf14b769849bf486c3f2fd01d08"
  },
  {
    "url": "assets/img/Veronica05.e2a0b86d.png",
    "revision": "e2a0b86de7cb4820bed35085151aee8b"
  },
  {
    "url": "assets/img/Veronica06.6591c97a.png",
    "revision": "6591c97adf28db8341f307c372ec414b"
  },
  {
    "url": "assets/js/1.733272dc.js",
    "revision": "6dfaafae13de1379b41f211041f5e532"
  },
  {
    "url": "assets/js/10.e7773852.js",
    "revision": "24cfc061ff72a235a16a38eee310c2d2"
  },
  {
    "url": "assets/js/11.67e2a93d.js",
    "revision": "afc27d821552b1e4c1a597452468196b"
  },
  {
    "url": "assets/js/12.e495207a.js",
    "revision": "5d76b4b7ea04b41d6372da5c61a54380"
  },
  {
    "url": "assets/js/13.2ec4bc59.js",
    "revision": "f1b240e95778324e0e566e50c129da07"
  },
  {
    "url": "assets/js/14.a219a132.js",
    "revision": "2c6f501f3649c90198ace6eda4347842"
  },
  {
    "url": "assets/js/15.3004522d.js",
    "revision": "1a9ff79ce39c26c461bb112d1b901cbb"
  },
  {
    "url": "assets/js/16.a39b44b0.js",
    "revision": "0f3c492eb32b4b51d13bb797ba1bc8cc"
  },
  {
    "url": "assets/js/17.23b9ed79.js",
    "revision": "b3fb2216c2f9dde60e673988e38a36f1"
  },
  {
    "url": "assets/js/18.e5425d32.js",
    "revision": "f5cdef9260bc0def669c97fa5b4a8266"
  },
  {
    "url": "assets/js/19.5181e80e.js",
    "revision": "1d3e7a9267f1f9b53cc1e6fdb706dd18"
  },
  {
    "url": "assets/js/20.8b696e68.js",
    "revision": "60f5b86d34ae2266ad1c183213d847a2"
  },
  {
    "url": "assets/js/21.79e22a1a.js",
    "revision": "b512705c6332875ecf6608aca33391a1"
  },
  {
    "url": "assets/js/22.4006c753.js",
    "revision": "dc70c0360abc09442638673c9c64be87"
  },
  {
    "url": "assets/js/23.aad15c2c.js",
    "revision": "6c424e8b367297c44b30c1bf42087ea9"
  },
  {
    "url": "assets/js/4.e7261445.js",
    "revision": "280f79347b76e446b9da41a1c9a63cb8"
  },
  {
    "url": "assets/js/5.c5bab9de.js",
    "revision": "12bd14bcdad57f4c320d3d797aa345ea"
  },
  {
    "url": "assets/js/6.15362343.js",
    "revision": "bedb766567a57998442e2d754b7e4e00"
  },
  {
    "url": "assets/js/7.0dbcfce1.js",
    "revision": "8cedb0c1d4abcf39bcabfe0969e2194d"
  },
  {
    "url": "assets/js/8.5f595dc2.js",
    "revision": "be2f3f725850e55a1860cef109a21a05"
  },
  {
    "url": "assets/js/9.fa0ee140.js",
    "revision": "78df26ef10598193058ddd7b98fd22bd"
  },
  {
    "url": "assets/js/app.00dc6d12.js",
    "revision": "fc8e56690043d2a40902a523abaf43ee"
  },
  {
    "url": "assets/js/vendors~flowchart.37ba7798.js",
    "revision": "15297c8d3910307e2427bf8cd8ce5dcc"
  },
  {
    "url": "avatar.png",
    "revision": "3eac1ab666fa1f4292cf31138b6274d2"
  },
  {
    "url": "blogs/折腾记录/2020/【折腾记录01】一个本地代码仓库push到两个代码管理平台.html",
    "revision": "97f5986b092fcd143aaa69a4b0e98d0e"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "6ebbbabfa74da471984e56a7f6570da4"
  },
  {
    "url": "categories/index.html",
    "revision": "200f83aea855124b372e5376d83d5a85"
  },
  {
    "url": "categories/心情随笔/index.html",
    "revision": "569a9dbbf50a4c2900c3f182179ec58d"
  },
  {
    "url": "docs/BathDuck/index.html",
    "revision": "4f824a3135d596c254c9fe96aa4f153c"
  },
  {
    "url": "docs/BathDuck/梦开始的地方.html",
    "revision": "3f578920a9fff92abb70afc18a4c8c1e"
  },
  {
    "url": "docs/FrontEnd/index.html",
    "revision": "84587bfc9d443f0913fa8c5179c0afc8"
  },
  {
    "url": "docs/project/Demo.html",
    "revision": "93b09b3f2589675911d57e8b3105ed62"
  },
  {
    "url": "docs/project/index.html",
    "revision": "699cbebbed9c436dda35a4092fa3b9af"
  },
  {
    "url": "docs/project/Veronica.html",
    "revision": "674c9449f139703d611a91fd1c92d2f5"
  },
  {
    "url": "flex/flex1.png",
    "revision": "c3a8501634ad8ed7ef3aec9e00f46d5b"
  },
  {
    "url": "flex/flex10.png",
    "revision": "42a9839eb7343234cbc8675267e163e0"
  },
  {
    "url": "flex/flex11.png",
    "revision": "e666ae101c90d23165baf45fd97b6634"
  },
  {
    "url": "flex/flex12.png",
    "revision": "02406286d5a15111ce72e0a19d48f0f3"
  },
  {
    "url": "flex/flex13.jpg",
    "revision": "803e6eb226603692535ae0c24c999ae0"
  },
  {
    "url": "flex/flex14.png",
    "revision": "2c8175763b1f1f26046ef9e5aad873d9"
  },
  {
    "url": "flex/flex2.png",
    "revision": "388c46d32356745a233fee3dbf263e9c"
  },
  {
    "url": "flex/flex3.png",
    "revision": "049fc94d3383c8d57716b635212c74ed"
  },
  {
    "url": "flex/flex4.png",
    "revision": "d38a1fc3db5188e51aa0b216969949ac"
  },
  {
    "url": "flex/flex5.png",
    "revision": "6de64516a0d006b30a782c4c4be298b9"
  },
  {
    "url": "flex/flex6.png",
    "revision": "fe2d175b80208e60c4ddfbf49708bc45"
  },
  {
    "url": "flex/flex7.png",
    "revision": "2cfdfe79c49d275a7120c1ac0e340479"
  },
  {
    "url": "flex/flex8.png",
    "revision": "e3fce17c53888258340dd16a8e2dea20"
  },
  {
    "url": "flex/flex9.png",
    "revision": "9ffd0d2ae78663ceccb099b003cbf07d"
  },
  {
    "url": "hero.png",
    "revision": "32725197ead745ef436a3ff420b25e68"
  },
  {
    "url": "hero1.png",
    "revision": "3eac1ab666fa1f4292cf31138b6274d2"
  },
  {
    "url": "img/note/gitmoji_img.png",
    "revision": "3cea068b7b1bc2cfc244a36abe29474a"
  },
  {
    "url": "img/note/vue-hook.png",
    "revision": "160e4b4dab77c9209f5da8eb73441027"
  },
  {
    "url": "img/project/Veronica01.png",
    "revision": "fea3f8f42d0a4623b65a87a9e14dd35a"
  },
  {
    "url": "img/project/Veronica02.png",
    "revision": "271a8e3cbe24c9e9f293c0cd47a10154"
  },
  {
    "url": "img/project/Veronica03.png",
    "revision": "6156e0b2b6ccdc94806e4b8d3f6411bd"
  },
  {
    "url": "img/project/Veronica04.png",
    "revision": "c63c8bf14b769849bf486c3f2fd01d08"
  },
  {
    "url": "img/project/Veronica05.png",
    "revision": "e2a0b86de7cb4820bed35085151aee8b"
  },
  {
    "url": "img/project/Veronica06.png",
    "revision": "6591c97adf28db8341f307c372ec414b"
  },
  {
    "url": "index.html",
    "revision": "fb826353f8620b9a3dc510e9511b79b7"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "1d38fcd75e8d8f23bdbff160ca04a2f7"
  },
  {
    "url": "logo.png",
    "revision": "c92aa29af8aa9810d0b6760e7ad5d915"
  },
  {
    "url": "meLogo.jpg",
    "revision": "e780a288208fd629f68910bdef8023dd"
  },
  {
    "url": "meme.gif",
    "revision": "86254a09c78b68f8e44079769a076a8a"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "180613fee68f24334c0f3e6413c6659c"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "6e256cacf6a8d2b6f15799b09069ee57"
  },
  {
    "url": "tag/index.html",
    "revision": "fc00745bbb4792c499748239b7dcb54e"
  },
  {
    "url": "tag/清风/index.html",
    "revision": "8b52098fde49f628536450b24c69653e"
  },
  {
    "url": "timeline/index.html",
    "revision": "22f48c35dcf4cc083940f1f957ba2b42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
