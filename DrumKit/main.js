window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(
    "audio[data-key='".concat(e.keyCode, "']")
  );
  const key = document.querySelector(".key[data-key='".concat(e.keyCode, "']"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.className = 'key playing';
});
const keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
}
