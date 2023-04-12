window.addEventListener('keydown', playSound);
function playSound(e) {
  const audio = document.querySelector(
    "audio[data-key='".concat(e.keyCode, "']")
  );
  const key = document.querySelector(".key[data-key='".concat(e.keyCode, "']"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.className = 'key playing';
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.className = 'key';
}
const keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);
