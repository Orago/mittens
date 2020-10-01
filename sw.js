const cacheName = 'mittens';

// Cache all the files to make a PWA
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Our application only has two files here index.html and manifest.json
      // but you can add more such as style.css as your app grows
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './index.js',
        './License',
        './manifest.json',
        './u/index.html',
        './team/index.html',
        './social/index.html',
        './team/index.html',
        './projects/index.html',
        './navigation/index.html',
        './music/orago/index.html',
        //Extra
        './extra/index.html',
        /*Coding*/
        './extra/coding/index.html',
        './extra/coding/newpage.html',
        './extra/coding/samepage.html',
        './extra/coding/w3editor.html',
        /*Fake Crash page*/
        './extra/crash/chromebook.html',
        './extra/crash/chromebook.html',
        /*Discord*/
        './extra/discord/webhook.html',
        /*Minecraft Clock*/
        './extra/mc/index.html',
        './extra/mc/clock.js',
        './extra/mc/style.css',
        /*Notes*/
        './extra/notes/index.html',
        /*Timers and Clocks*/
        './extra/timers/index.html',
        './extra/timers/christmas.html',
        './extra/timers/new-years.html',
        './extra/timers/world-clock.html',
        //Changes
        './changes/bot/index.html',
        './changes/mittz-chat/index.html',
        './changes/index.html',
        //errors
        './error/404/index.html',
        './error/505/index.html',
        //assets
        
        /*JS*/
        './assets/js/main.js',
        './assets/js/last-visit.js',
        './assets/js/loader.js',
        './assets/js/jquery.min.js',
        './assets/js/skel.min.js',
        './assets/js/mp3_player.js',
        /*CSS*/
        './assets/css/main.css',
        './assets/css/icons.css',
        './assets/css/mp3_player.css',
        './assets/css/error.css',
        './assets/css/font-awesome.min.css',
        './assets/css/social.css',
        './assets/css',
        './assets/css',
        './assets/css',
        './assets/css',
        './assets/css',
        './assets/css',
        './assets/css',
        
        
        
        
        './games/tetris/index.html',
        './games/tetris/css/main.css',
        './games/tetris/js/board.js',
        './games/tetris/js/constants.js',
        './games/tetris/js/game.js',
        './games/tetris/js/index.js',
        './games/tetris/js/painter.js',
        './games/tetris/js/piece-factory.js',
        './games/tetris/js/pieces.js',
        './games/tetris/js/shaker.js',
        './games/tetris/js/sound-manager.js',
      ]);
    })
  );
});

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});