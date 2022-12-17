 import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

console.log(player);


const handlePlay = function(time) {localStorage.setItem("videoplayer-current-time", JSON.stringify(time));

    const current = localStorage.getItem("videoplayer-current-time");
    const parsedCurrent = JSON.parse(current);
    return parsedCurrent.seconds;
    
};



player.on('timeupdate', handlePlay);

player.setCurrentTime(handlePlay).then(function(handlePlay) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});