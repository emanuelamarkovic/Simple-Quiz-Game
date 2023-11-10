const mario = document.getElementById('mario');
mario.style.position= 'relative';
const imgMario = mario.getElementsByTagName('img');
// initial x-axe value
imgMario[0].style.transform = "translateX(0)";
// matches numbers in style attributes
const regex = /(?:[^0-9]+)?(\d+)(?:[^0-9]+)?/;
let marioXPosition = parseInt(imgMario[0].style.transform.match(regex).slice(1));
const marioTheme = new Audio('assets/516010__enviromaniac2__super-mario-bros-theme-techno-loop.mp3')
marioTheme.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
marioTheme.play()
const stopMario = () => {
    imgMario[0].src = "./assets/mario-stand.gif";
}
const moveMario = (event) => {
  //console.log('keydown!');
  //console.log(event.key);
  if (!(imgMario[0].src = "./assets/mario-walk.gif")) {
    imgMario[0].src = "./assets/mario-stand.gif";
  };
  if (event.key === 'ArrowLeft') {
    // move left
    marioXPosition -= 10;
    imgMario[0].style.transform = `translateX(${marioXPosition}px) scaleX(-1)`;
  } else if (event.key === 'ArrowRight') {
    //console.log("right! ")
    marioXPosition += 10;
    imgMario[0].style.transform = `translateX(${marioXPosition}px) scaleX(1)`;
  }
};
document.addEventListener('keyup', stopMario);
document.addEventListener('keydown', moveMario);