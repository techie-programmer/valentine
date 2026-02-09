// Typewriter effect
const text = "Will you be my Valentine? ❤️";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// No button escape
const noBtn = document.getElementById("noBtn");

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Yes button celebration
document.getElementById("yesBtn").addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="color:white; font-size:40px; animation: fadeIn 2s;">
      YAYYY 💖 You’re my Valentine!
    </h1>
  `;
  document.getElementById("music")?.play();
});

document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const text = "Will you be my Valentine? ❤️";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

  yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <h1 style="color:white; font-size:36px; text-align:center;">
        YAYYY 💖 You’re my Valentine!
      </h1>
    `;
  });

});

