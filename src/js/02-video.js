import Player from '@vimeo/player';
 import _throttle from 'lodash.throttle';

 
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

console.log(player);


function handlePlay(time) {
 
    localStorage.setItem("videoplayer-current-time",JSON.stringify(time.seconds))  
}

function settingCurentTime() {
    const sometime = localStorage.getItem("videoplayer-current-time") || 0;
    
    player.setCurrentTime(sometime);

}
    
player.on('timeupdate', _throttle(handlePlay,1000));

player.on("loaded", settingCurentTime);



