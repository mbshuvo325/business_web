'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "639641dadf9fe3c91f30e13619d624f5",
"assets/FontManifest.json": "16f78ef77fc139f3fe2427705258c61c",
"assets/fonts/Hind_Siliguri-Regular_GhOgZt6.ttf": "c35557270087ba64812331665bec9cd4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Rubik-Italic-VariableFont_wght.ttf": "553a4f4977f96a990f178e16c4f5a0dc",
"assets/fonts/Rubik-VariableFont_wght.ttf": "86eb98635233be43f682f26bad629f11",
"assets/images/accounting.png": "811d1d74ca0ebc46a5c64a959781137e",
"assets/images/authentication.png": "8de0de491f34410526c83c8b1a7c62dc",
"assets/images/bee.png": "eaadd5d1d2d1941904e0c6447ff8ba72",
"assets/images/brandname.png": "acdb9737ad6526a5874bb1beed472987",
"assets/images/calender.png": "62c69dd4cec0e225a6fde01e3c79a7a8",
"assets/images/defaultLogo.png": "03abec3e3d510a4f5d617c786854d8fc",
"assets/images/delivery_icon.png": "090f59ec115f56715dff2e75ccd2889a",
"assets/images/ecommerce.png": "6e9cacc7d7bbff68246c70f4ff5c5fee",
"assets/images/financial_profit.png": "c586d49dfc8bc26c232578a0965285ba",
"assets/images/hishabeeLogo.png": "22aed6e9c4fc0dad1235b37b8c3746e9",
"assets/images/icons/barcodeIcon.png": "79b1a7b33c18eb6e4d55af4b5b602626",
"assets/images/icons/bee.png": "eaadd5d1d2d1941904e0c6447ff8ba72",
"assets/images/icons/beeMain.png": "a4210449304955dde97c4de78c5ea06d",
"assets/images/icons/book.svg": "bf8d39f80fbb789a5b0d0f81d4307299",
"assets/images/icons/camera.png": "d13861352e1a6fd7ec64e47b4f41a545",
"assets/images/icons/chat.png": "2906db62490f9c209191fa7bd653331e",
"assets/images/icons/delete_icon_white_border.png": "a4b735c551772da13770bc108beffdf3",
"assets/images/icons/editIcon.png": "859a72479e60e18a53c1d6f7f77a2a57",
"assets/images/icons/expenses.png": "ef9a3e8444ad57ad76dbc8298783a5bf",
"assets/images/icons/filterIcon.png": "e89c6cf5d821ea2e2ed530d3816d064c",
"assets/images/icons/gallery.png": "bc39f6d6a335995dc889f9b259ce020d",
"assets/images/icons/green_plus.png": "931adc0d4830a05b0b36ad3ceb877c41",
"assets/images/icons/icons_shop.png": "29ddb89820da0d727a800ed1b4a01ffe",
"assets/images/icons/logo_simple.png": "7c71a5227c890b2b067176a463b3dbbe",
"assets/images/icons/med.svg": "0fbce30d7f0342a3c613d23c28237fd3",
"assets/images/icons/profile_placeholder.png": "cdcb43a12acf49bf7e2a02590b4cd4c5",
"assets/images/icons/quick_sell.png": "9064ce914568e91828e580c27a87333e",
"assets/images/icons/red_delete.png": "21cfe4430783d93b1234d9c063a1c6ea",
"assets/images/icons/red_minus.png": "443d4b95dd9ed0c0826ef33685472b07",
"assets/images/icons/scanIcon.png": "4f88a8f04e7873f36e00a741bff14c81",
"assets/images/icons/tick.svg": "b87709e5ac08180b0e6dbd00ad7cebaf",
"assets/images/inventory.png": "d9cd85c7a51ee10f25960713f6b176fa",
"assets/images/loginModel.jpg": "930135ac9e7b6cd7490e1cc4ac55dfad",
"assets/images/mapIcon.png": "3f2df7515c0da14e4845e05b02d0da3f",
"assets/images/marketing_icon.png": "9916699ebaf6ca152975ad80d4d47902",
"assets/images/onboard1.png": "37624c260d5f963e2ff1e5f79a6ca076",
"assets/images/onboard2.png": "ab6a3e19c204d46ad08be458e3b1d122",
"assets/images/printButton.png": "fe92041372241111c3f2ac120cbe827b",
"assets/images/report.png": "455dbbc60418022c84799aa4f8661773",
"assets/images/shop_features/bo.png": "ddbe85a311215c9c9b0fe838a79d2b94",
"assets/images/shop_features/calculator.png": "dcb1237153a0e741dcc5f1ea375ab47e",
"assets/images/shop_features/contacts.png": "3e66a8e7ed08d68915179e7887337cb8",
"assets/images/shop_features/cs.png": "fffe40fc81c3fe8aa81a9200d510d765",
"assets/images/shop_features/duelist.png": "f49087f69b67fb989706ab6cab23dda0",
"assets/images/shop_features/emi.png": "73a29a2fc5c9e6b6b21b7a88a04d9b51",
"assets/images/shop_features/er.png": "d5fdd9e7c40166e10cee5e394f261fe5",
"assets/images/shop_features/expenses.png": "ef9a3e8444ad57ad76dbc8298783a5bf",
"assets/images/shop_features/ic_contacts%25201.png": "d7d7910d113cdbf2655f3371c14c1538",
"assets/images/shop_features/ic_marketing%25201.png": "520b41bf5136594ebdbe07bd5aaa9287",
"assets/images/shop_features/ic_sms%25201.png": "45b6a148f9b842df37cd6df3cf08dc49",
"assets/images/shop_features/new_banner.png": "474989b71a91edb245b8a6096a4e3b8f",
"assets/images/shop_features/notifications.png": "41e120d0747f9c17da6d4e6a6183affa",
"assets/images/shop_features/oditiya_logo.png": "0d957498cd086dc67aadc2560f9644c6",
"assets/images/shop_features/onlineOrders.png": "0fc25a1e54677c7f16dacb582910492a",
"assets/images/shop_features/productList.png": "7632f0c1de1eaf091366f17596571d8a",
"assets/images/shop_features/pw.png": "0fbb2e51a6404ed41ade8916d4a12e6a",
"assets/images/shop_features/report.png": "b58969b3009c173af002adbcbd1054e8",
"assets/images/shop_features/sell.png": "564cd7ce706944fb1ccd3b31d7923e87",
"assets/images/shop_features/settings.png": "bd4a69b991e43ac3baaa741496c8abcb",
"assets/images/shop_features/stock.png": "03877437a11d27ac2a51c75cbd2bbbfd",
"assets/images/shop_features/transcation.png": "8d52c29386d61f14bcc5df9407f5a8c3",
"assets/images/signUpAvatar.png": "654be8b5ff9ecf262a8aa3062103fc7a",
"assets/images/slider/slider1.png": "b6fc79aae5e34974f00d3a6631dc6023",
"assets/images/slider/slider2.png": "2b1e75c308b2d3baad5e8b870d93e548",
"assets/images/slider/slider3.png": "d755d39cfaecb07d54add75f5e8d7ca2",
"assets/images/slider/slider4.png": "3847bb1eaadb5f1338a5b9a973b5e624",
"assets/images/slider/slider5.png": "753a0d6306df01d49205b4f63744755d",
"assets/images/slider/slider6.png": "05fe0780febbdb75815dab6faf51681a",
"assets/images/slider/slider7.png": "8dfa279f4ee1eaca1e8a8111fe3233d5",
"assets/images/slider/slide_1.png": "d169589f2f972ffc30d8fa4754e45858",
"assets/images/slider/slide_2.png": "04fe0e857fcf9116a8aff54dbb6de102",
"assets/images/slider/slide_3.png": "6a9261c729d134d273fa1a373d116655",
"assets/images/slider/slide_4.png": "5cdc8edb6284925d42cf7f9e150d4c19",
"assets/images/slider/slide_5.png": "dbec333a9338ec6dca7c3bf5d7c5266e",
"assets/images/slider/slide_6.png": "d0850352414e5411d96c7d85ccf65819",
"assets/images/slider/slide_7.png": "c242c8cfeb9d82972fa0b0f0e54c40c2",
"assets/images/slogan.png": "73e5893b54a2775991b6d9dfacb0a11c",
"assets/images/splash.png": "950250d92e5ea1fa3088ff9f7738663f",
"assets/images/splashNew.png": "422e1a3a13cb976168310f92160a0fba",
"assets/images/svg_image/accounting.svg": "e2f573317425944604b858ff582d187e",
"assets/images/svg_image/audit.svg": "5e3dc566db08f7cdceffa723c19f2557",
"assets/images/svg_image/backspace.svg": "d036d382af1a385852acb595441c9e92",
"assets/images/svg_image/back_arrow.svg": "652202a05ae9b025883d63ed258ed56d",
"assets/images/svg_image/calender_onboard.svg": "9c93129439af91814ea0db5b815c5c7c",
"assets/images/svg_image/cash_money.svg": "229702ac40c0b90037f50a37fa8e1f62",
"assets/images/svg_image/chat.svg": "17dcf0bafde4c2075cb30e3c3ef06543",
"assets/images/svg_image/copy.svg": "0e9d981644b4830bb008e84261fb4b86",
"assets/images/svg_image/delivery_icon.svg": "633af8a9ecb06205b868768ce42984f9",
"assets/images/svg_image/delivery_truck.svg": "84bd9502082d3d69868c56305b3c5e51",
"assets/images/svg_image/digital_payment.svg": "c58aba4e030ded2fcd8a0e724e12377d",
"assets/images/svg_image/dots.svg": "102edd962a9c3fd82ffbe9fc516e1975",
"assets/images/svg_image/due.svg": "10822b2f653daeb5f4d6b6048ec792d7",
"assets/images/svg_image/ecommerce.svg": "4f9ae305dc0d3f681dbe57f4e661d2b0",
"assets/images/svg_image/financial-profit.svg": "1609bf1cb17a8fa3d1027aef4d47254e",
"assets/images/svg_image/gmail.svg": "e5b80bbdea6dfa161acb5ac0e6cef460",
"assets/images/svg_image/inventory.svg": "e4af21ec624e5ecd8205bd9fb8cd0097",
"assets/images/svg_image/marketing_icon.svg": "9347fb537ffd89b7a0eb64637e818e8f",
"assets/images/svg_image/message.svg": "ef7c47d5a16d6f6c7bf1a2a3404f9a11",
"assets/images/svg_image/messenger.svg": "f5e15ef1f8ddd9fb7e9e37e54de02ff4",
"assets/images/svg_image/qr_code.svg": "dbdcb9cf597c3f6a891eba27e35f35d5",
"assets/images/svg_image/recharge.svg": "7ebbb9cc202ba511bf3e2ab6af6575af",
"assets/images/svg_image/replay.svg": "5544498de34ecb4e5a1b3ca9a27779af",
"assets/images/svg_image/report.svg": "41c704dcae16a23756931b413c6ab1bc",
"assets/images/svg_image/reports.svg": "3fbd3b80a6d72b5514c6cec658f11eed",
"assets/images/svg_image/sell.svg": "9a70168eb4d5d801fcdf31b7a8f882e4",
"assets/images/svg_image/setting.svg": "9c0a1ed282aa5702072ea40bdf697557",
"assets/images/svg_image/share.svg": "583a7b1711b2a1b456da9dd3d376618d",
"assets/images/svg_image/sms.svg": "4b9d9fc83eda0294b818c015034a6948",
"assets/images/svg_image/transaction.svg": "82c7ba441a3eb9d7676bc129f5914c87",
"assets/images/svg_image/website.svg": "69e2d062e9b10a51d524df7aab2f4cf3",
"assets/images/svg_image/whatsapp.svg": "b66b147b3409d4d378ded0d9f3c3f9cc",
"assets/images/svg_image/withdraw.svg": "21c82d621a47d105bb6c5be467512c02",
"assets/images/topBg.png": "58d0544ea7c8e7e496150e8c5f25b147",
"assets/images/xml_icon/ic_gmail.xml": "3631249b9af29b85db5bc6d59fe0a7ac",
"assets/images/xml_icon/ic_money.xml": "827d83c12c6ab379d7e95403814c6eba",
"assets/images/xml_icon/ic_online_shopping.xml": "e8551372064068b8cffb3398a5268876",
"assets/images/xml_icon/ic_phones.xml": "636605e6fad15d4dd3320bcd23d08d5c",
"assets/images/xml_icon/ic_qr_code.xml": "e95a7628feb72af5a462dd95ddaca276",
"assets/images/xml_icon/online_order.xml": "1d573c1c75e33420e29ae74990d50d78",
"assets/images/xml_icon/setting.xml": "f04b121fde74deed1edbb9a7b7099979",
"assets/NOTICES": "755391e9410e3807f4eab98b2accd34f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7929fc6483a5ffb4f0bd557d98c5f096",
"/": "7929fc6483a5ffb4f0bd557d98c5f096",
"main.dart.js": "0b5f7c1bc696f04e81311146a5ac05a1",
"manifest.json": "a7ae35be0921fe2850b4727676fbdda3",
"splash/style.css": "9da546edafcbd175633926c9f12d5f79",
"version.json": "e9794d3a5755558b4904f1bea9229344"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
