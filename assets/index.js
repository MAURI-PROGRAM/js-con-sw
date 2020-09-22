import MediaPlayer from './MediaPlayer.js';
import AutoPause from './plugins/Autopause.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector('#playButton');
const buttonMute = document.querySelector('#muteButton');
const player = new MediaPlayer({el:video,plugins:[  new AutoPlay() ,new AutoPause() ]});
button.onclick=()=>player.togglePlay();
buttonMute.onclick=()=>player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    })
}