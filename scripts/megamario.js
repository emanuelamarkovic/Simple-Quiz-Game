const main = document.querySelector('main')

const mario = document.getElementById('mario');
mario.style.position= 'relative';

const imgMario = mario.querySelector('#mario>img');
// initial x-axe value
imgMario.style.transform = "translateX(0)";
// matches numbers in style attributes
const regex = /(?:[^0-9]+)?(\d+)(?:[^0-9]+)?/;
let marioXPosition = parseInt(imgMario.style.transform.match(regex).slice(1));

instructions = document.createElement('div');
instructions.style.textAlign = 'center';
instructions.innerHTML = '<br><p>turn Mario with arrow keys left < or > right</p><br><p>make sure to enable autoplay media in your browser</p>';

const marioTheme = new Audio('../assets/516010__enviromaniac2__super-mario-bros-theme-techno-loop.mp3')
let marioThemePlays = false;
// loop theme
marioTheme.addEventListener('ended', () => {
  marioTheme.currentTime = 0;
  marioTheme.play();
}, false);

const stopMario = () => {
    imgMario.src = "../assets/mario-stand.gif";
}
const moveMario = (event) => {
  if (!marioThemePlays) {
    marioTheme.play();
    marioThemePlays = true;
  }
  //console.log('keydown!');
  //console.log(event.key);
  if (!(imgMario.src = "../assets/mario-walk.gif")) {
    imgMario.src = "../assets/mario-stand.gif";
  };
  if (event.key === 'ArrowLeft') {
    // move left
    marioXPosition -= 10;
    imgMario.style.transform = `translateX(${marioXPosition}px) scaleX(-1)`;
  } else if (event.key === 'ArrowRight') {
    //console.log("right! ")
    marioXPosition += 10;
    imgMario.style.transform = `translateX(${marioXPosition}px) scaleX(1)`;
  }
};
document.addEventListener('keyup', stopMario);
document.addEventListener('keydown', moveMario);