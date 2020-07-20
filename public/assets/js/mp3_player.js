window.addEventListener("load", event => {
   ////////////////
   // Variables
   ////////////////

   const iconTopExpand = document.querySelector(".icon.topExpand"),
         iconBottomExpand = document.querySelector(".icon.bottomExpand"),
         topContent = document.querySelector(".topContent"),
         bottomContent = document.querySelector(".bottomContent"),
         playBtn = document.querySelector(".btnPlay"),
         musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
         swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
         imageBg = document.querySelector(".imageBg"),
         albumBg = document.querySelector(".albumBg"),
         wrapper = document.querySelector(".wrapper"),
         bodyBg = document.querySelector(".bodyBg"),
         next = document.querySelector(".swiper-button-next"),
         prev = document.querySelector(".swiper-button-prev");

   // Songs
   const songs = [
      {
         img: "https://i.kym-cdn.com/photos/images/facebook/001/401/455/9fa.jpg",
         artistName: "Edxv & Varlet",
         songName: "Do Good Die Great",
         song: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fdo%20good%20die%20great%20(2nd%20take)%20(1).mp3?v=1595053248708",
         color: "#afc5c3"
      },
      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#f5c63d"
      },
      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#74c2dd"
      },
      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#a3b8b0"
      },
      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#38736d"
      },
      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#a4b1b2"
      },

      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#8098ce"
      },
      {
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664",
         artistName: "Null",
         songName: "Null Song",
         song: "",
         color: "#1a91bd"
      }
   ];

   // Music Groups
   const groups = [
      {
         title: "Songs",
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      },
      {
         title: "Artists",
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      },
      {
         title: "Playlists",
         img:
         "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      },
      {
         title: "Favourites",
         img: "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      }
   ];

   // Playlists
   const playlists = [
      {
         title: "Pop Music",
         img:
         "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      },
      {
         title: "On the road!",
         img:
         "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      },
      {
         title: "Christmas Songs",
         img:
         "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      },
      {
         title: "Rainy days",
         img:
         "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664"
      }
   ];

   ////////////////
   // Events
   ////////////////

   iconTopExpand.addEventListener("click", expandTop);
   iconBottomExpand.addEventListener("click", expandBottom);
   playBtn.addEventListener("click", playSong);

   ////////////////
   // Functions
   ////////////////

   function playSong() {
      if (playBtn.classList.contains("pause")) {
         playBtn.classList.remove("pause");
         document.querySelector(".swiper-slide-active audio").pause();
      } else {
         playBtn.classList.add("pause");
         document.querySelector(".swiper-slide-active audio").play();
      }
      progressBar();
   }

   function expandTop() {
      if (topContent.classList.contains("expand")) {
         topContent.classList.remove("expand");
      } else {
         topContent.classList.add("expand");

         //Swiper Music Goups
         var mySwiper2 = new Swiper(".swiper-container.slider-two", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: "auto",
            draggable: true
         });
      }
      albumSize();
   }

   function expandBottom() {
      if (bottomContent.classList.contains("expand")) {
         bottomContent.classList.remove("expand");
      } else {
         bottomContent.classList.add("expand");
      }
      albumSize();
      progressBar();
   }

   // change Album size

   function albumSize() {
      const albumContent = document.querySelectorAll(".albumContent");

      if (
         topContent.classList.contains("expand") &&
         bottomContent.classList.contains("expand")
      ) {
         albumContent.forEach(function(el) {
            el.classList.add("small");
         });
      } else {
         albumContent.forEach(function(el) {
            el.classList.remove("small");
         });
      }
   }

   //Swiper Albums

   songs.forEach(function(el) {
      let template = `
<div class="swiper-slide">
<div class="settings">
<div class="icon heart"></div>
<div class="icon plus"></div>
</div>
<audio src="${el.song}"></audio>
<div class="albumContent">
<div class="albumCover" style="background-color:${
      el.color
      }"><img src="${el.img}"></div>
<p class="artistName">${el.artistName}</p>
<p class="songName">${el.songName}</p></div>
<div class="playlistsContent">
<div class="icon close"></div>
</div>
</div>`;

      swipperWrapper.insertAdjacentHTML("beforeend", template);
   });

   // To Create Playlists
   playlists.forEach(function(el) {
      let templatePlaylist = `
<div class="playlist">
<span class="checkbox"></span>
<figure class="playlistBg"><img src="${el.img}"></figure>
<figure class="playlistThumb"><img src="${el.img}"></figure>
<p class="playlistTitle">${el.title}</p></div>`;

      var playlistContent = document.querySelectorAll(".playlistsContent");

      playlistContent.forEach(function(el) {
         el.insertAdjacentHTML("beforeend", templatePlaylist);
      });
   });

   // Slider Songs (Middle)

   var mySwiper = new Swiper(".swiper-container.slider-one", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: false,
      effect: "coverflow",

      coverflowEffect: {
         rotate: 40,
         slideShadows: false
      },

      // Navigation arrows
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      }
   });

   // Change Song & Album BG
   next.addEventListener("click", changeSong);
   prev.addEventListener("click", changeSong);

   function changeSong() {
      if (playBtn.classList.contains("pause")) {
         document.querySelectorAll("audio").forEach(function(el) {
            el.pause();
         });
         document.querySelector(".swiper-slide-active audio").play();
      }
      changeBg();
      progressBar();
      closePlaylists();
      changeBgColor();
   }

   function changeBg() {
      albumBg.classList.add("animeBg");

      setTimeout(() => {
         imageBg.src = document.querySelector(
            ".slider-one .swiper-slide-active img"
         ).src;
      }, 300);

      setTimeout(() => {
         albumBg.classList.remove("animeBg");
      }, 700);
   }

   function changeBgColor() {
      var getColor = document.querySelector(
         ".slider-one .swiper-slide-active .albumCover"
      ),
          activeColor = getColor.style.backgroundColor;

      setTimeout(() => {
         bodyBg.style.backgroundColor = activeColor;
      }, 200);
   }

   // Music Groups

   for (let i = 0; i < groups.length; i++) {
      const { title, img } = groups[i];

      var template2 = `<div class="swiper-slide group">
<figure><img src="${img}"></figure>
<p class = "titleGroup">${title}</p>
</div>`;

      musicGroups.insertAdjacentHTML("beforeend", template2);
   }

   // Add favourites & Playlist

   const heart = document.querySelectorAll(".heart"),
         plus = document.querySelectorAll(".plus"),
         close = document.querySelectorAll(".close"),
         playlist = document.querySelectorAll(".playlist");

   heart.forEach(function(el) {
      el.addEventListener("click", addFave);
   });

   plus.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   close.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   playlist.forEach(function(el) {
      el.addEventListener("click", addPlaylist);
   });

   function addFave(e) {
      if (e.currentTarget.classList.contains("fave")) {
         e.currentTarget.classList.remove("fave");
      } else {
         e.currentTarget.classList.add("fave");
      }
   }

   function openPlaylists(e) {
      if (
         e.currentTarget
         .closest(".swiper-slide-active")
         .classList.contains("open")
      ) {
         e.currentTarget
            .closest(".swiper-slide-active")
            .classList.remove("open");
      } else {
         e.currentTarget.closest(".swiper-slide-active").classList.add("open");
      }
   }

   function closePlaylists() {
      document.querySelector(".swiper-slide-active").classList.remove("open");
   }

   function addPlaylist(e) {
      if (e.currentTarget.classList.contains("selected")) {
         e.currentTarget.classList.remove("selected");
      } else {
         e.currentTarget.classList.add("selected");
      }
   }

   // Song Progress Bar

   function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
   }

   function progressBar() {
      var songDuration = document.querySelector(".swiper-slide-active audio")
      .duration,
          endTime = document.querySelector(".endTime"),
          songAudio = document.querySelector(".swiper-slide-active audio"),
          currentTime = document.querySelector(".currentTime");

      endTime.innerHTML = formatTime(songDuration);

      songAudio.ontimeupdate = function() {
         var progress = document.querySelector(".progress");
         progress.style.width =
            songAudio.currentTime * 100 / songDuration + "%";
         currentTime.innerHTML = formatTime(songAudio.currentTime);
      };
   }

   ////////////////
   // Call Functions
   ////////////////

   changeBg();
   progressBar();
   changeBgColor();

   wrapper.style.height = window.innerHeight + "px";

   console.log(window.innerHeight);
});
