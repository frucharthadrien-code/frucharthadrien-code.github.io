/**
 * Grille Matrix — teinte verte
 */
(function () {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const chars = "0123456789<>{}[]|/\\=+-_*#%&@:;";
  const fontSize = 16;
  const colGap = 16;
  const frameMs = 52;
  let columns = 0;
  let drops = [];

  function canvasWidth() {
    if (document.documentElement.classList.contains("force-mobile")) {
      return document.body.clientWidth;
    }
    return window.innerWidth;
  }

  function resize() {
    const w = canvasWidth();
    canvas.width = w;
    canvas.height = window.innerHeight;
    columns = Math.floor(w / colGap);
    drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
  }

  function draw() {
    ctx.fillStyle = "rgba(3, 10, 6, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + "px JetBrains Mono, monospace";

    for (let i = 0; i < columns; i++) {
      const x = i * colGap;
      const row = drops[i];
      const y = row * fontSize;

      if (y < 0) {
        drops[i]++;
        continue;
      }

      const char = chars[Math.floor(Math.random() * chars.length)];

      ctx.fillStyle = "rgba(0, 255, 120, 0.78)";
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = Math.floor(Math.random() * -30);
      } else {
        drops[i]++;
      }
    }
  }

  resize();
  window.addEventListener("resize", resize);

  if (reduceMotion) {
    ctx.fillStyle = "rgba(0, 255, 120, 0.55)";
    ctx.font = fontSize + "px JetBrains Mono, monospace";
    for (let x = 0; x < canvas.width; x += colGap * 2) {
      for (let y = 0; y < canvas.height; y += fontSize * 3) {
        ctx.fillText("0", x, y);
      }
    }
    return;
  }

  setInterval(draw, frameMs);
})();
