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
    "revision": "cc5eeea3c23284e8eb798a3a7a48efc1"
  },
  {
    "url": "assets/css/0.styles.8e93c78e.css",
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
    "url": "assets/js/1.b92e32a3.js",
    "revision": "12ce7e152c1896a52cbf6c0b57720b15"
  },
  {
    "url": "assets/js/10.13435292.js",
    "revision": "e9a8f1f23c187503153f7aef466c25ad"
  },
  {
    "url": "assets/js/11.9ca085aa.js",
    "revision": "55090128c12d763a044d539798561ed2"
  },
  {
    "url": "assets/js/12.821b6c08.js",
    "revision": "49d0b2a75ef780d551de07dd49844985"
  },
  {
    "url": "assets/js/13.311b2fbb.js",
    "revision": "dca4d0d91891106a995d4242d08d2c0a"
  },
  {
    "url": "assets/js/14.f618163a.js",
    "revision": "8bc6d3d81930776af3e299aa2035667d"
  },
  {
    "url": "assets/js/15.550743b6.js",
    "revision": "162e6db5f21b0bb61a9f50acc31d29dd"
  },
  {
    "url": "assets/js/16.825ee888.js",
    "revision": "97de2fc0fb0aeaa3cd0e8534cfbee647"
  },
  {
    "url": "assets/js/17.9bbda080.js",
    "revision": "29b5583358a23e9ac942530ca1e443dd"
  },
  {
    "url": "assets/js/18.2574ba00.js",
    "revision": "e55eb97d83febc4a1ded61d146c44835"
  },
  {
    "url": "assets/js/19.ffca85f6.js",
    "revision": "29f58209516fb927d0379f3decf05c2b"
  },
  {
    "url": "assets/js/20.fdae80b0.js",
    "revision": "7b66e233192bc8fe35dd1e89d69476e2"
  },
  {
    "url": "assets/js/21.46bf0805.js",
    "revision": "aa6c0be242765271d21fa7589036747f"
  },
  {
    "url": "assets/js/22.8e52ceb3.js",
    "revision": "daedd8adfcc10387145cd826ef05442f"
  },
  {
    "url": "assets/js/23.4515c60a.js",
    "revision": "3754e37b574a0ec5a5f304db4cbc2f5c"
  },
  {
    "url": "assets/js/24.4663bd07.js",
    "revision": "a00886679a87b9d06dcc639d7e62fb5b"
  },
  {
    "url": "assets/js/25.85d5ce71.js",
    "revision": "e7186dd1585c59acaed8bf42d59a1036"
  },
  {
    "url": "assets/js/26.2bd1cfb0.js",
    "revision": "8a28f3a29a5f894479c28be1bb8784eb"
  },
  {
    "url": "assets/js/4.b90428dd.js",
    "revision": "7b791719c5906afd39eaceb99875f3a3"
  },
  {
    "url": "assets/js/5.d79b468d.js",
    "revision": "3a6e81d4b83b536e60331299587b751e"
  },
  {
    "url": "assets/js/6.3c58c24d.js",
    "revision": "bc9e7f80a7e606baeca30f101d25e667"
  },
  {
    "url": "assets/js/7.ba490455.js",
    "revision": "e8240f526fd6c36c5582e33757dbb868"
  },
  {
    "url": "assets/js/8.93aac4ad.js",
    "revision": "b8f9812cb2e116425b33c61d39773495"
  },
  {
    "url": "assets/js/9.28864ee2.js",
    "revision": "6fad2a20d308719efa324952d704a716"
  },
  {
    "url": "assets/js/app.0a48de04.js",
    "revision": "abad8949e40cc62d41d901ca8c99d91c"
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
    "revision": "c66ce0f7b802d5f34599d1a405ddcfc7"
  },
  {
    "url": "categories/心情随笔/index.html",
    "revision": "40ce135b426a999f30263339e6f4580c"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "172aea7ef769574b82f9e67483d92f82"
  },
  {
    "url": "categories/index.html",
    "revision": "f3abb7d9b43f7ffa9066337541a63f87"
  },
  {
    "url": "docs/BathDuck/梦开始的地方.html",
    "revision": "8f87971681a80cd2da9f3d70f2e0df82"
  },
  {
    "url": "docs/BathDuck/index.html",
    "revision": "2b5c6bf037aa55b30c3eeeb126dc4b07"
  },
  {
    "url": "docs/BathDuck/recode.html",
    "revision": "a6f2ba01cade7401df54fa83e5e27093"
  },
  {
    "url": "docs/FrontEnd/【vue】知识点.html",
    "revision": "ec08a7ed190eb159ad009371d77e6675"
  },
  {
    "url": "docs/FrontEnd/index.html",
    "revision": "949bdbc5abb81650d36898c60e17a79b"
  },
  {
    "url": "docs/FrontEnd/JS中的this指向.html",
    "revision": "cbc88eaa8c17396d9735efad43cbe9b1"
  },
  {
    "url": "docs/project/Demo.html",
    "revision": "57338d94d8589c10f93392c93eed63f0"
  },
  {
    "url": "docs/project/index.html",
    "revision": "50b27d3ec0390b264e1bddec691834ad"
  },
  {
    "url": "docs/project/Veronica.html",
    "revision": "08cec7181d2dcf9242e677f6f848a3fe"
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
    "revision": "ea71c729746bc26b2c691fc62e90cb72"
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
    "url": "no_00.png",
    "revision": "ac82c2ead74617a90d5be631b4967d73"
  },
  {
    "url": "no_1.png",
    "revision": "69fa91ab920666ff63fdbc10f280bcde"
  },
  {
    "url": "tag/清风/index.html",
    "revision": "f6d6c9f9408dd1f7786f2c07d7076132"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "9c9ab5fb3acd2f987dd7c7d8140ebdc4"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "b0ba9205bc983391227c8d1a6e94d89a"
  },
  {
    "url": "tag/index.html",
    "revision": "c009f500b1fb1245012087fb359bce78"
  },
  {
    "url": "tag/js this/index.html",
    "revision": "f2a922b04c39895a966074f4f8a70b3c"
  },
  {
    "url": "tag/js vue/index.html",
    "revision": "facc8f31634ac49d4bf677ef90fc142a"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb4fca37611ea7cf82787588442b1ec0"
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
