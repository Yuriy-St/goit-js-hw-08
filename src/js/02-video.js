import Player from '@vimeo/player';
import lodash from 'lodash';

const player = new Player('vimeo-player');

let currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  try {
    currentTime = JSON.parse(currentTime);
    player.setCurrentTime(currentTime);
  } catch (e) {
    console.error(e);
  }
}

player.on('timeupdate', lodash.throttle(updatePlayerTime, 1000));

function updatePlayerTime() {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(error => {
      console.error(error);
    });
}
