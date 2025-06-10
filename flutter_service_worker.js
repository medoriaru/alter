'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "caf34896ea1c2e0800e48f0cf4d94ae3",
"version.json": "34f53a3c11c9cb1d61ae18b6faf64622",
"favicon.ico": "e960c12aa5a5413f62a17e9b79addb3a",
"index.html": "9d199e2103e2492e334e0d26f84df436",
"/": "9d199e2103e2492e334e0d26f84df436",
"firebase-messaging-sw.js": "d18d9cc6172169056830dcf7b817e9b0",
"main.dart.js": "0b0ad01995db757288d1c3989dd466e9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-192.png": "c64bfe553f072ba7ee4e6a79bffb1a41",
"icons/Icon-maskable-192.png": "cec42d926f7580e15452d2f97662e07b",
"icons/Icon-maskable-512.png": "67d587af406838feae4d2e1129c03252",
"icons/Icon-512.png": "b1aec9a8adf5b8e6a7358efe33f79f9f",
"loading.css": "e2a0312959e4f10885dce12de03856b7",
"manifest.json": "0b173e65b7af4e1ef82c6db9d73eb8b9",
"assets/AssetManifest.json": "a0c22758323005c91f6af3f36127f361",
"assets/NOTICES": "2c4bbc6253aafcf001e6cff398c8cfa8",
"assets/img/footer/payment/visa.png": "eee92e8dd68fc32a3e4d729214a99c9f",
"assets/img/footer/payment/sbp.png": "35f3981592506450a0d9c726332e00ea",
"assets/img/footer/payment/mastercard.png": "491fd28b493211513debfd180b2a2563",
"assets/img/footer/payment/mir.png": "66cfe6cf10d1aa658ec4d965c40b0e3d",
"assets/img/footer/google_play.png": "7e77a04a06b7e5c096beacd818799c0c",
"assets/img/footer/app_store.png": "9dd9df4923aeea2c00d2c98c17eb0256",
"assets/img/conference/icons/paperclip.svg": "6efa2b15688fc469840e9021d2753144",
"assets/img/conference/icons/send.svg": "b4f8bdbb10a9b55690798829595afd28",
"assets/img/vk.png": "1ec71d48224bf9c3a4cc94f1e2e14912",
"assets/img/profile/avatar.jpg": "9ca3831ee0c70345fc8fa4bfdd6e7735",
"assets/img/logo.png": "11b4b8d8db49294e0e7b1dfcf78af7b1",
"assets/img/main_page/banner.png": "ca66cbcd905799af0060037cc1256c4f",
"assets/img/main_page/ads_mobile.svg": "d39f67e140a10177230558507ee5347e",
"assets/img/main_page/app_store.svg": "91394bddbc00660948afeca3e64fda57",
"assets/img/main_page/google_play.svg": "59988aed20e6a9e0e76514a4a2d318dd",
"assets/img/main_page/icons/psychotherapist.svg": "22d624ace6e1e9723e02ee16b65b76b9",
"assets/img/main_page/icons/Infectious.svg": "090bd5617783584bae853f4b8080552c",
"assets/img/main_page/icons/endocrinologist.svg": "776d56d8bb34fe975c1e056e44243b1b",
"assets/img/main_page/icons/neurologist.svg": "d5c7aff1efa164691a50ad6248728233",
"assets/img/main_page/icons/dermatologist.svg": "9e317024c233a2208dd88cc6da62556f",
"assets/img/main_page/icons/pulmonologist.svg": "b1cdc68078ec38b17a4f377f5ad319e9",
"assets/img/main_page/icons/cosmetologist.svg": "e13860fe32ce2dcb2f152361b48a56e0",
"assets/img/main_page/icons/cardiologist.svg": "db4386a39b6179fcbb161cb149bbf61d",
"assets/img/main_page/icons/gynecologist.svg": "e201b6bbcc9ecb1bb54e895d4e3a1552",
"assets/img/main_page/icons/urologist.svg": "9179afb6e8855ea3f94761eb6949b928",
"assets/img/main_page/icons/therapist.svg": "9587fb8958daa01b69a52dcb540e7d17",
"assets/img/main_page/icons/ophthalmologist.svg": "8a72080ddf781d929470eb3849e4d4fa",
"assets/img/main_page/icons/allergies.svg": "27e40d114108d15cb0e2bbd9b05f5595",
"assets/img/main_page/icons/otolaryngologist.svg": "8b9c272dfbd43143cd013912fef091bb",
"assets/img/main_page/icons/gastroenterologist.svg": "64c644aeed7544f372c06622d9edc59d",
"assets/img/account/edit-2.svg": "23b9e844e9d4df022ac8b8770247515b",
"assets/img/account/home.svg": "c158e3aeb2f16f388b0468e468dba334",
"assets/img/account/document-text-fill.svg": "d38469501652e726a38968d5df768fb5",
"assets/img/account/ticket.svg": "46c68c2e40e0f59015ac49828938bd89",
"assets/img/account/percentage-square.svg": "a680aa4b7e98a6427aca026538e2860e",
"assets/img/account/support.svg": "e4ceba2db7de9207cd9ee1a5fdadfe3e",
"assets/img/account/card.svg": "35c104aa74e3f6c976b18916cce42431",
"assets/img/account/document-text.svg": "b6b2583fae56ecc5d3f8e435ce222de5",
"assets/img/account/profile_fill.svg": "83bddba7de5c75333d856a55d0d20b8e",
"assets/img/account/device-message.svg": "aa3aedfccf9441763f20ff9582ca0164",
"assets/img/account/profile.svg": "4ac4181233ba4cfea38482bc5168b92d",
"assets/img/account/document-download-fill.svg": "3c77846075a462a989d2587883a61807",
"assets/img/account/users.svg": "6f5941f78899536e71922cdb94f04c63",
"assets/img/google.png": "8a393c5430ca78fcd92b1c0a72ee0a23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fc08afb7d05c3f2347fc2aa84c62c7d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5d2d01752e6ec134fe77d9ef4baf86b7",
"assets/packages/app/img/footer/payment/visa.png": "eee92e8dd68fc32a3e4d729214a99c9f",
"assets/packages/app/img/footer/payment/sbp.png": "35f3981592506450a0d9c726332e00ea",
"assets/packages/app/img/footer/payment/mastercard.png": "491fd28b493211513debfd180b2a2563",
"assets/packages/app/img/footer/payment/mir.png": "66cfe6cf10d1aa658ec4d965c40b0e3d",
"assets/packages/app/img/footer/google_play.png": "7e77a04a06b7e5c096beacd818799c0c",
"assets/packages/app/img/footer/app_store.png": "9dd9df4923aeea2c00d2c98c17eb0256",
"assets/packages/app/img/conference/icons/paperclip.svg": "6efa2b15688fc469840e9021d2753144",
"assets/packages/app/img/conference/icons/send.svg": "b4f8bdbb10a9b55690798829595afd28",
"assets/packages/app/img/vk.png": "1ec71d48224bf9c3a4cc94f1e2e14912",
"assets/packages/app/img/profile/avatar.jpg": "9ca3831ee0c70345fc8fa4bfdd6e7735",
"assets/packages/app/img/logo.png": "ab79d0cf3f6f24ab28c3f058f5f1d555",
"assets/packages/app/img/main_page/banner.png": "ca66cbcd905799af0060037cc1256c4f",
"assets/packages/app/img/main_page/ads_mobile.svg": "d39f67e140a10177230558507ee5347e",
"assets/packages/app/img/main_page/app_store.svg": "91394bddbc00660948afeca3e64fda57",
"assets/packages/app/img/main_page/google_play.svg": "59988aed20e6a9e0e76514a4a2d318dd",
"assets/packages/app/img/main_page/icons/psychotherapist.svg": "22d624ace6e1e9723e02ee16b65b76b9",
"assets/packages/app/img/main_page/icons/Infectious.svg": "090bd5617783584bae853f4b8080552c",
"assets/packages/app/img/main_page/icons/endocrinologist.svg": "776d56d8bb34fe975c1e056e44243b1b",
"assets/packages/app/img/main_page/icons/neurologist.svg": "d5c7aff1efa164691a50ad6248728233",
"assets/packages/app/img/main_page/icons/dermatologist.svg": "9e317024c233a2208dd88cc6da62556f",
"assets/packages/app/img/main_page/icons/pulmonologist.svg": "b1cdc68078ec38b17a4f377f5ad319e9",
"assets/packages/app/img/main_page/icons/cosmetologist.svg": "e13860fe32ce2dcb2f152361b48a56e0",
"assets/packages/app/img/main_page/icons/cardiologist.svg": "db4386a39b6179fcbb161cb149bbf61d",
"assets/packages/app/img/main_page/icons/gynecologist.svg": "e201b6bbcc9ecb1bb54e895d4e3a1552",
"assets/packages/app/img/main_page/icons/urologist.svg": "9179afb6e8855ea3f94761eb6949b928",
"assets/packages/app/img/main_page/icons/therapist.svg": "9587fb8958daa01b69a52dcb540e7d17",
"assets/packages/app/img/main_page/icons/ophthalmologist.svg": "8a72080ddf781d929470eb3849e4d4fa",
"assets/packages/app/img/main_page/icons/allergies.svg": "27e40d114108d15cb0e2bbd9b05f5595",
"assets/packages/app/img/main_page/icons/otolaryngologist.svg": "8b9c272dfbd43143cd013912fef091bb",
"assets/packages/app/img/main_page/icons/gastroenterologist.svg": "64c644aeed7544f372c06622d9edc59d",
"assets/packages/app/img/account/edit-2.svg": "23b9e844e9d4df022ac8b8770247515b",
"assets/packages/app/img/account/home.svg": "c158e3aeb2f16f388b0468e468dba334",
"assets/packages/app/img/account/document-text-fill.svg": "d38469501652e726a38968d5df768fb5",
"assets/packages/app/img/account/ticket.svg": "46c68c2e40e0f59015ac49828938bd89",
"assets/packages/app/img/account/percentage-square.svg": "a680aa4b7e98a6427aca026538e2860e",
"assets/packages/app/img/account/support.svg": "e4ceba2db7de9207cd9ee1a5fdadfe3e",
"assets/packages/app/img/account/card.svg": "35c104aa74e3f6c976b18916cce42431",
"assets/packages/app/img/account/document-text.svg": "b6b2583fae56ecc5d3f8e435ce222de5",
"assets/packages/app/img/account/profile_fill.svg": "83bddba7de5c75333d856a55d0d20b8e",
"assets/packages/app/img/account/device-message.svg": "aa3aedfccf9441763f20ff9582ca0164",
"assets/packages/app/img/account/profile.svg": "4ac4181233ba4cfea38482bc5168b92d",
"assets/packages/app/img/account/document-download-fill.svg": "3c77846075a462a989d2587883a61807",
"assets/packages/app/img/account/users.svg": "6f5941f78899536e71922cdb94f04c63",
"assets/packages/app/img/google.png": "8a393c5430ca78fcd92b1c0a72ee0a23",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ede5d2a36d500673114cab7ebc50c719",
"assets/fonts/MaterialIcons-Regular.otf": "5b86abb97bf42a6b4e54cc75e8774c23",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
