if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return s[e]||(o=new Promise(async o=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=o}else importScripts(e),o()})),o.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},o=(o,s)=>{Promise.all(o.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(o)};self.define=(o,a,n)=>{s[o]||(s[o]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+o.slice(1)};return Promise.all(a.map(o=>{switch(o){case"exports":return s;case"module":return i;default:return e(o)}})).then(e=>{const o=n(...e);return s.default||(s.default=o),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aimmY9wReRbujDPZn_2p7/_buildManifest.js",revision:"ca99d1a5e577552eff8259500a7bed55"},{url:"/_next/static/aimmY9wReRbujDPZn_2p7/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.2ec16d540a4ec64e39c6.js",revision:"a631a4410a9a47e6e06c05ca57ddf0e7"},{url:"/_next/static/chunks/framework.a3ab6d70963b928e4674.js",revision:"4753007ca4e23221aa4e23dfab9bc39c"},{url:"/_next/static/chunks/main-ee4e442bb6e4129489a7.js",revision:"0c2cbc8b4b7fc66c4aaace8836cd4722"},{url:"/_next/static/chunks/pages/_app-848fe748a0834114f387.js",revision:"44b94477508ad630e279a964cebf1074"},{url:"/_next/static/chunks/pages/_error-5cce418b8712a3375f63.js",revision:"61483c6e9b2433d1b87721995d4f0861"},{url:"/_next/static/chunks/pages/index-63741af121018771e07a.js",revision:"204d512e5608fc4dda8d0d0faf294204"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/cfbed48ffd977b1b898b.css",revision:"d785c4fd9599b01a91796af07f4f83d5"},{url:"/fonts/HKGrotesk/HKGrotesk-Black.otf",revision:"43ce1e456362e54e2b57fd5dea1b8957"},{url:"/fonts/HKGrotesk/HKGrotesk-Bold.otf",revision:"3d35049a875fbc4d3f3165da78f82ff4"},{url:"/fonts/HKGrotesk/HKGrotesk-BoldItalic.otf",revision:"efb3492b343b5ee3cf7a2817465c6204"},{url:"/fonts/HKGrotesk/HKGrotesk-BoldLegacy.otf",revision:"a513317ed274ce3a61617c39cf88a6af"},{url:"/fonts/HKGrotesk/HKGrotesk-BoldLegacyItalic.otf",revision:"db0c2d7066ffa0b668e63fb4e900a7d7"},{url:"/fonts/HKGrotesk/HKGrotesk-ExtraBold.otf",revision:"9365523aecd843114051fed48aeced75"},{url:"/fonts/HKGrotesk/HKGrotesk-Italic.otf",revision:"3f9c37f377cac346af7cea8adc4f0803"},{url:"/fonts/HKGrotesk/HKGrotesk-LegacyItalic.otf",revision:"10849cf4e28465f56db8de92b1255b9e"},{url:"/fonts/HKGrotesk/HKGrotesk-Light.otf",revision:"5ad7c6fb6cda7fb57b637fe6e0767593"},{url:"/fonts/HKGrotesk/HKGrotesk-LightItalic.otf",revision:"a312017ed5f5b876b9d6ff421e0fba97"},{url:"/fonts/HKGrotesk/HKGrotesk-LightLegacy.otf",revision:"bb13589da599c488e8a5a34895b1f86a"},{url:"/fonts/HKGrotesk/HKGrotesk-LightLegacyItalic.otf",revision:"9dcb8d393ad348fbcdaf28eddc88ba54"},{url:"/fonts/HKGrotesk/HKGrotesk-Medium.otf",revision:"c471e9ace164521d3f8c2cd2461921fa"},{url:"/fonts/HKGrotesk/HKGrotesk-MediumItalic.otf",revision:"60a23e603a44452d5f9b878e3cb5648b"},{url:"/fonts/HKGrotesk/HKGrotesk-MediumLegacy.otf",revision:"279884f46afec4fa284d8b09fe7eb672"},{url:"/fonts/HKGrotesk/HKGrotesk-MediumLegacyItalic.otf",revision:"5a2f2b6d678c29403f61660abc03dd0f"},{url:"/fonts/HKGrotesk/HKGrotesk-Regular.otf",revision:"cab8839a909b408392b7b3147c2afd23"},{url:"/fonts/HKGrotesk/HKGrotesk-RegularLegacy.otf",revision:"a67e3a90329da0e1d0b260f89ffed5eb"},{url:"/fonts/HKGrotesk/HKGrotesk-SemiBold.otf",revision:"507739170000c10b7ddf7bfa59a4952d"},{url:"/fonts/HKGrotesk/HKGrotesk-SemiBoldItalic.otf",revision:"3ecc2801d223b01878d055123fbe3f38"},{url:"/fonts/HKGrotesk/HKGrotesk-SemiBoldLegacy.otf",revision:"da377a1e2b37faf6d67666c728e24f37"},{url:"/fonts/HKGrotesk/HKGrotesk-SemiBoldLegacyItalic.otf",revision:"1fda5c0f56c106050f410108b60eae05"},{url:"/fonts/HKGrotesk/SIL Open Font License.txt",revision:"4e148f8656e5d3c58a1922b214abf80f"},{url:"/fonts/NerkoOne/NerkoOne-Regular.ttf",revision:"8b29fd70b736d2803c9a7f029c1aca5e"},{url:"/fonts/SpaceMono/SpaceMono-Bold.ttf",revision:"450f757ba22bf3eb9f839eb26287398a"},{url:"/fonts/SpaceMono/SpaceMono-BoldItalic.ttf",revision:"97244ddaccbf325073da7af362e2cb5f"},{url:"/fonts/SpaceMono/SpaceMono-Italic.ttf",revision:"233cc83beb6682c47f0d6a3ea129428f"},{url:"/fonts/SpaceMono/SpaceMono-Regular.ttf",revision:"52eb73dbce8bf4083a59acc2e91699ad"},{url:"/icons/android-icon-144x144.png",revision:"40e02541e3e32263ebe14af21a34ed1f"},{url:"/icons/android-icon-192x192.png",revision:"731c48a4fd900ee5077735e51b3cdc80"},{url:"/icons/android-icon-36x36.png",revision:"f613f55a3a3cf775a44e2ee2f9fc4b9e"},{url:"/icons/android-icon-48x48.png",revision:"95937a6bf3ea9c0e8893593458d25ed6"},{url:"/icons/android-icon-72x72.png",revision:"5fe964a89c100527785c57b7af719695"},{url:"/icons/android-icon-96x96.png",revision:"2980fbf5d42722afbd2e0aed3aa99ce6"},{url:"/icons/apple-icon-114x114.png",revision:"8da7a11885741b09f4466ed4ee41c4c7"},{url:"/icons/apple-icon-120x120.png",revision:"2ad67b7b2ef6ec79441f6687d8dbfbcd"},{url:"/icons/apple-icon-144x144.png",revision:"40e02541e3e32263ebe14af21a34ed1f"},{url:"/icons/apple-icon-152x152.png",revision:"ce76f482712a6eff087e487430f2f770"},{url:"/icons/apple-icon-180x180.png",revision:"ff596d5a8b260fe0676915880cd97124"},{url:"/icons/apple-icon-57x57.png",revision:"84809fa63a75d639c9b1396313f8d214"},{url:"/icons/apple-icon-60x60.png",revision:"2334be9194312cc42ffee8e7afaf11ed"},{url:"/icons/apple-icon-72x72.png",revision:"5fe964a89c100527785c57b7af719695"},{url:"/icons/apple-icon-76x76.png",revision:"209bb15bbfcbb0ae6fd04f7272843fa8"},{url:"/icons/apple-icon-precomposed.png",revision:"731c48a4fd900ee5077735e51b3cdc80"},{url:"/icons/apple-icon.png",revision:"731c48a4fd900ee5077735e51b3cdc80"},{url:"/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/icons/favicon-16x16.png",revision:"2da1cda7f741081838be149368247b0c"},{url:"/icons/favicon-32x32.png",revision:"cfbe0227ffea41f58b2aab419e7c55c0"},{url:"/icons/favicon-96x96.png",revision:"2980fbf5d42722afbd2e0aed3aa99ce6"},{url:"/icons/favicon.ico",revision:"7db0e2b85e95776b2d6edf9ab0201708"},{url:"/icons/icon-512x512.png",revision:"a1f1fa64d3f65ed4257a8f059b9af6b9"},{url:"/icons/maskable_icon.png",revision:"a1f1fa64d3f65ed4257a8f059b9af6b9"},{url:"/icons/ms-icon-144x144.png",revision:"40e02541e3e32263ebe14af21a34ed1f"},{url:"/icons/ms-icon-150x150.png",revision:"8b0652e3fc2207ef978cbde45b09afc2"},{url:"/icons/ms-icon-310x310.png",revision:"7162b18bda0956c6e35ba6daf24ded3c"},{url:"/icons/ms-icon-70x70.png",revision:"ea783fe5b16dbcd30703931da4792e8d"},{url:"/manifest.json",revision:"9bf6708f545c7caf6a54c962d8953f2f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
