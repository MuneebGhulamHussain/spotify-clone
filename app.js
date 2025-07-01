let playIcon=document.getElementById("playIcon")
let audioPlayInitial=new Audio("songs/1.mp3")
let range=document.getElementById("range")
let indexSong=0
let gif=document.getElementById("gif")


const songsDetails=[
    {
        songName:"Mortals - Song by Wario",
        songPath:"songs/1.mp3",
        coverPath:"covers/Mortal.jpg",
        
    }
    ,
    {
        songName:"Cielo- Huma-Huma",
        songPath:"songs/2.mp3",
        coverPath:"covers/Ceilo.jpeg",
        
    }
    ,
    {
        songName:"Invincible-Deaf Kev",
        songPath:"songs/3.mp3",
        coverPath:"covers/Invincible.jpg",
    }
    ,
    {
        songName:"My Heart-Heaven and EH!DE",
        songPath:"songs/4.mp3",
        coverPath:"covers/myheart.jpg",
    }
    ,
    {
        songName:"Janji-Heroes Tonight",
        songPath:"songs/5.mp3",
        coverPath:"covers/janji.jpg",
    }
    ,
    {
        songName:"Youth-Tell me why",
        songPath:"songs/youth - tell me why.mp3",
        coverPath:"covers/youth - tell me why.jpg",
    }
    ,
   {
        songName:"Clarx, Shiah Maisel - Everything I Got",
        songPath:"songs/Clarx, Shiah Maisel - Everything I Got.mp3",
        coverPath:"covers/Clarx, Shiah Maisel - Everything I Got.jpg",
    }
    

]
// console.log(songsDetails)


playIcon.addEventListener("click",()=>{
    if(audioPlayInitial.paused ||audioPlayInitial.currentTime<=0){
        audioPlayInitial.play()
        playIcon.className="fa-regular fa-2x fa-circle-pause"
        gif.style.opacity=1
    }
    else{
        audioPlayInitial.pause()
        playIcon.className="fa-regular fa-2x fa-circle-play"
        gif.style.opacity=0
    }
})
audioPlayInitial.addEventListener("timeupdate",()=>{
    rangePerctage=parseInt((audioPlayInitial.currentTime/audioPlayInitial.duration)*100)
    range.value=rangePerctage
    console.log(range)
})
range.addEventListener("change",()=>{
    audioPlayInitial.currentTime=(range.value*audioPlayInitial.duration)/100
})


let songAppend=document.getElementById("songAppend")
// console.log(songContainer)

songsDetails.forEach((element,index)=>{
    
let individualSong = new Audio(element.songPath);
    let getDuration
individualSong.addEventListener("loadedmetadata", () => {
    getDuration= individualSong.duration
    

    console.log(getDuration)

    let getMin=Math.floor(getDuration/60)
    console.log(getMin)
    let getSec=Math.floor(getDuration%60)
    console.log(getSec)

    
    let finalSec
    if(getSec<10){
        finalSec=`0${getSec}`
    }
    else{
        finalSec=getSec
    }
    songAppend.innerHTML+=  `<div  class="song-container">
                         <img src="${element.coverPath}" alt="">
                         <div class="innerspan">
                         <span class="song-name">${element.songName}</span>
                         <span class="time-span"><span>${getMin}</span> : <span>${finalSec}</span>  <i onclick="iconClick(this)" class="fa-regular fa-circle-play icons"></i></span>
                         </div>
                     </div>`
});
    // console.log(element)

})
// function iconClick(element){
//     // console.log("element",element)
  
//     let arr=songAppend.children
//     let icons=document.getElementsByClassName("icons")
//     console.log(icons)
    
//       if(element.className=="fa-regular fa-circle-play icons" ){
//     element.className="fa-regular fa-circle-pause icons"
      
//     }else{
//         element.className="fa-regular fa-circle-play icons"
//     }

// }

// let currentlyPlayingAudio = null;
// let currentlyPlayingIndex = null;

localStorage.setItem("classname","fa-regular fa-circle-pause icons")

function iconClick(element) {
    var icons = document.getElementsByClassName("icons");
    var i;

    // sab icons ko reset karo
    // for (i = 0; i < icons.length; i++) {
    //     icons[i].className = "fa-regular fa-circle-play icons";
    // }

    // // Local Storage se value nikaalo
    // var getFromLS = localStorage.getItem("classname");

    // if (getFromLS == "fa-regular fa-circle-pause icons") {
    //     // Agar pehle pause tha, to ab play kar do
    //     element.className = "fa-regular fa-circle-play icons";
    //     localStorage.setItem("classname", "fa-regular fa-circle-play icons");
    // } else {
    //     // Nahin to pause kar do
    //     element.className = "fa-regular fa-circle-pause icons";
    //     localStorage.setItem("classname", "fa-regular fa-circle-pause icons");
    // }
    let songNameBottom=document.getElementById("songNameBottom")
    let userChoice=element.parentNode.previousElementSibling.innerText
    for(var i=0;i<songsDetails.length;i++){
        if(songsDetails[i].songName==userChoice){
            songNameBottom.innerHTML=songsDetails[i].songName
             gif.style.opacity=1
            audioPlayInitial.src=songsDetails[i].songPath
            audioPlayInitial.play()
        }
        else{
            // audioPlayInitial.play()
            console.log("error")

        }
    }
    // console.log(element.parentNode.previousElementSibling.innerText,"current song")
}
