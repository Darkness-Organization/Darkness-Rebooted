var cursorTrail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', function(e) {
  var cursor = document.createElement('div');
  cursor.classList.add('cursor');
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
  cursorTrail.appendChild(cursor);
  
  // Remove old cursor elements
  var cursors = cursorTrail.querySelectorAll('.cursor');
  if (cursors.length > 10) {
    cursorTrail.removeChild(cursors[0]);
  }
  
  // Fade out cursor elements as they get farther from the mouse like the shit from star wars
  cursors.forEach(function(cursor) {
    var distance = Math.sqrt(Math.pow(e.pageX - cursor.offsetLeft, 2) + Math.pow(e.pageY - cursor.offsetTop, 2));
    var opacity = 1 - (distance / 100);
    cursor.style.opacity = opacity;
  });
});
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
  navToggle.classList.toggle('active');
});
function updateClock() {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const time = now.toLocaleTimeString('en-US');
  const clock = document.getElementById('clock');
  clock.textContent = `${day}, ${time}`;
}
updateClock();
setInterval(updateClock, 1000);