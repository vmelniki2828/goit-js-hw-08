import Player from '@vimeo/player';   
import throttle from 'lodash.throttle';

const savedSet = localStorage.getItem("videoplayer-current-time");
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

if (savedSet) {
    const parsedSet = JSON.parse(savedSet);
    player.setCurrentTime(parsedSet).then(function(seconds) {});
}

function onTimeUpdate ({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
};