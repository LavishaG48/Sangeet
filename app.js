const audio = document.querySelector("audio");
const play = document.querySelector("#play");
const playAll = document.querySelector("#playAll");
const img = document.querySelector("img");
const title = document.querySelector(".title");
const artist = document.querySelector("#artist");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const pop = document.querySelector("#Pop");
const bollywood = document.querySelector("#Bollywood");
const mellow = document.querySelector("#Mellow");
let isPlaying = false;


//Creating an array of objects to store information about songs
// pop.addEventListener("click", ()=>{
  let songs = [
    {
      name: "Starboy",
      artist:"The Weeknd",
      img:"images/Pop/1.jpg",
      path:"music/Pop/1.mp3",
      id:"0",
    },
    {
      name: "Circles",
      artist:"Post Malone",
      img:"images/Pop/2.jpg",
      path:"music/Pop/2.mp3",
      id:"1",
    },
    {
      name: "Toosie Slide",
      artist:"Drake",
      img:"images/Pop/3.jpeg",
      path:"music/Pop/3.mp3",
      id:"2",
    },
    {
      name: "Yummy",
      artist:"Justin Beiber",
      img:"images/Pop/4.png",
      path:"music/Pop/4.mp3",
      id:"3",
    },
    {
      name: "Cradles",
      artist:"Sub Urban",
      img:"images/Pop/5.jpg",
      path:"music/Pop/5.mp3",
      id:"4",
    }
  ];

  //Function to play music
  const playMusic =  ()=> {
    isPlaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("animate");
  };

  //Function to pause music
  const pauseMusic = ()=> {
    isPlaying = false;
    audio.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("animate");
  };

  //defines action for play-pause button
  play.addEventListener("click", () =>{
    isPlaying ? pauseMusic() : playMusic();
  });


  //function to load music incase of change

  const loadMusic = (songs) =>{
    title.textContent = songs.name;
    artist.textContent = songs.artist;
    img.src = songs.img;
    audio.src = songs.path;
  }


  //Defines action when next button is pushed
  let index = 0;
  next.addEventListener("click", ()=>{
    index = (index + 1) % songs.length;
    loadMusic(songs[index]);
    playMusic();
  });

  //Defines action when previous button is pushed
  prev.addEventListener("click", ()=>{
    index = (index + (songs.length -1)) % songs.length;
    loadMusic(songs[index]);
    playMusic();
  });

  // Code for playlist

  songs.forEach((song) => {
    // creating elements for playlist

    let div = document.createElement("div");
    let image = document.createElement("img");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");

    // adding created elements inside html elements
    document.querySelector("#playlistContent").appendChild(div);
    div.append(image, h2, h3)

    // adding css classes
    div.classList.add("playlist-section");
    image.classList.add("playlist-image");
    h2.classList.add("playlist-title");
    h3.classList.add("playlist-artist");

    // adding values to html elements

    image.src = song.img;
    h2.textContent = song.name;
    h3.textContent = song.artist;
    let i = Number(song.id);
    div.addEventListener("click", ()=>{
      loadMusic(songs[i]);
      playMusic();
    });
  });

  // Loop Playlist


  playAll.addEventListener("click", ()=>{
    playMusic();
    songs.forEach((song) => {
      audio.addEventListener("ended", ()=>{
        loadMusic(song);
        playMusic();
      });
    });
  });

// });

// bollywood.addEventListener("click", ()=>{
//   let Songs = [
//     {
//       name: "Yummy",
//       artist:"Justin Beiber",
//       img:"images/Pop/4.png",
//       path:"music/Pop/4.mp3",
//       id:"0",
//     },
//     {
//       name: "Yummy",
//       artist:"Justin Beiber",
//       img:"images/Pop/4.png",
//       path:"music/Pop/4.mp3",
//       id:"1",
//     },
//     {
//       name: "Yummy",
//       artist:"Justin Beiber",
//       img:"images/Pop/4.png",
//       path:"music/Pop/4.mp3",
//       id:"2",
//     },
//     {
//       name: "Yummy",
//       artist:"Justin Beiber",
//       img:"images/Pop/4.png",
//       path:"music/Pop/4.mp3",
//       id:"3",
//     },
//     {
//       name: "Yummy",
//       artist:"Justin Beiber",
//       img:"images/Pop/4.png",
//       path:"music/Pop/4.mp3",
//       id:"4",
//     },
//   ];
//   //Function to play music
//   const playMusic =  ()=> {
//     isPlaying = true;
//     audio.play();
//     play.classList.replace("fa-play", "fa-pause");
//     img.classList.add("animate");
//   };
//
//   //Function to pause music
//   const pauseMusic = ()=> {
//     isPlaying = false;
//     audio.pause();
//     play.classList.replace("fa-pause", "fa-play");
//     img.classList.remove("animate");
//   };
//
//   //defines action for play-pause button
//   play.addEventListener("click", () =>{
//     isPlaying ? pauseMusic() : playMusic();
//   });
//
//
//   //function to load music incase of change
//
//   const loadMusic = (songs) =>{
//     title.textContent = songs.name;
//     artist.textContent = songs.artist;
//     img.src = songs.img;
//     audio.src = songs.path;
//   }
//
//
//   //Defines action when next button is pushed
//   let index = 0;
//   next.addEventListener("click", ()=>{
//     index = (index + 1) % songs.length;
//     loadMusic(songs[index]);
//     playMusic();
//   });
//
//   //Defines action when previous button is pushed
//   prev.addEventListener("click", ()=>{
//     index = (index + (songs.length -1)) % songs.length;
//     loadMusic(songs[index]);
//     playMusic();
//   });
//
//   // Code for playlist
//
//   songs.forEach((song) => {
//     // creating elements for playlist
//
//     let div = document.createElement("div");
//     let image = document.createElement("img");
//     let h2 = document.createElement("h2");
//     let h3 = document.createElement("h3");
//
//     // adding created elements inside html elements
//     document.querySelector("#playlistContent").appendChild(div);
//     div.append(image, h2, h3)
//
//     // adding css classes
//     div.classList.add("playlist-section");
//     image.classList.add("playlist-image");
//     h2.classList.add("playlist-title");
//     h3.classList.add("playlist-artist");
//
//     // adding values to html elements
//
//     image.src = song.img;
//     h2.textContent = song.name;
//     h3.textContent = song.artist;
//     let i = Number(song.id);
//     div.addEventListener("click", ()=>{
//       loadMusic(songs[i]);
//       playMusic();
//     });
//   });
//
//   // Loop Playlist
//
//
//   playAll.addEventListener("click", ()=>{
//     playMusic();
//     songs.forEach((song) => {
//       audio.addEventListener("ended", ()=>{
//         loadMusic(song);
//         playMusic();
//       });
//     });
//   });
// });
