/**
 * Portrait — gommage inversé (Clair Obscur: Expedition 33)
 * Le visage se recompose depuis la poussière et les pétales.
 */
(function () {
  var portrait = document.querySelector(".hero__portrait--gommage");
  if (!portrait) return;

  var frame = portrait.querySelector(".hero__portrait-frame");
  var img = portrait.querySelector("img");
  if (!frame || !img) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    portrait.classList.add("is-gommage-done", "is-gommage-fallback");
    return;
  }

  portrait.classList.add("is-gommage-running");

  var fallbackTimer = window.setTimeout(function () {
    if (portrait.classList.contains("is-gommage-done")) return;
    portrait.classList.remove("is-gommage-running");
    portrait.classList.add("is-gommage-done", "is-gommage-fallback");
    var stuck = portrait.querySelector(".hero__portrait-gommage");
    if (stuck && stuck.parentNode) stuck.parentNode.removeChild(stuck);
  }, 4500);

  var canvas = document.createElement("canvas");
  canvas.className = "hero__portrait-gommage";
  canvas.setAttribute("aria-hidden", "true");
  frame.appendChild(canvas);

  var NOISE_SIZE = 96;
  var DURATION = 2200;
  var DELAY = 320;
  var EDGE = 0.055;
  var GLOW = 0.028;
  var noiseGrid = null;
  var particles = [];
  var rafId = 0;
  var startTime = 0;
  var imgReady = null;
  var maskCtx = null;
  var maskCanvas = null;

  function buildNoise() {
    var coarse = new Float32Array(NOISE_SIZE * NOISE_SIZE);
    var fine = new Float32Array(NOISE_SIZE * NOISE_SIZE);
    var i;

    for (i = 0; i < coarse.length; i++) {
      coarse[i] = Math.random();
      fine[i] = Math.random();
    }

    noiseGrid = new Float32Array(NOISE_SIZE * NOISE_SIZE);
    for (i = 0; i < noiseGrid.length; i++) {
      noiseGrid[i] = coarse[i] * 0.72 + fine[i] * 0.28;
    }
  }

  function sampleNoise(u, v) {
    var size = NOISE_SIZE;
    var fx = u * (size - 1);
    var fy = v * (size - 1);
    var x0 = Math.floor(fx);
    var y0 = Math.floor(fy);
    var x1 = Math.min(x0 + 1, size - 1);
    var y1 = Math.min(y0 + 1, size - 1);
    var tx = fx - x0;
    var ty = fy - y0;
    var n00 = noiseGrid[y0 * size + x0];
    var n10 = noiseGrid[y0 * size + x1];
    var n01 = noiseGrid[y1 * size + x0];
    var n11 = noiseGrid[y1 * size + x1];
    var nx0 = n00 + (n10 - n00) * tx;
    var nx1 = n01 + (n11 - n01) * tx;
    return nx0 + (nx1 - nx0) * ty;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function resizeCanvas() {
    var rect = frame.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(1, Math.round(rect.width * dpr));
    var h = Math.max(1, Math.round(rect.height * dpr));
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    if (!maskCanvas) {
      maskCanvas = document.createElement("canvas");
      maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
    }
  }

  function buildMask(progress) {
    var w = canvas.width;
    var h = canvas.height;
    var mw = Math.max(64, Math.round(w * 0.45));
    var mh = Math.max(64, Math.round(h * 0.45));
    var imageData;
    var data;
    var x;
    var y;
    var u;
    var v;
    var n;
    var idx;
    var alpha;
    var edge;

    if (maskCanvas.width !== mw || maskCanvas.height !== mh) {
      maskCanvas.width = mw;
      maskCanvas.height = mh;
    }

    imageData = maskCtx.createImageData(mw, mh);
    data = imageData.data;

    for (y = 0; y < mh; y++) {
      v = y / (mh - 1 || 1);
      for (x = 0; x < mw; x++) {
        u = x / (mw - 1 || 1);
        n = sampleNoise(u, v);
        idx = (y * mw + x) * 4;
        edge = n - progress;

        if (edge <= -EDGE) {
          data[idx] = 255;
          data[idx + 1] = 255;
          data[idx + 2] = 255;
          data[idx + 3] = 255;
        } else if (edge < GLOW) {
          alpha = Math.max(0, 1 - edge / GLOW);
          alpha = alpha * alpha;
          data[idx] = 255;
          data[idx + 1] = Math.round(120 + alpha * 135);
          data[idx + 2] = Math.round(180 + alpha * 75);
          data[idx + 3] = Math.round(alpha * 255);
        } else {
          data[idx + 3] = 0;
        }
      }
    }

    maskCtx.putImageData(imageData, 0, 0);
  }

  function spawnParticles(progress, w, h, count) {
    var i;
    var u;
    var v;
    var n;
    var kind;

    for (i = 0; i < count; i++) {
      u = Math.random();
      v = Math.random();
      n = sampleNoise(u, v);
      if (Math.abs(n - progress) > GLOW * 2.2) continue;

      kind = Math.random() < 0.38 ? "petal" : "dust";
      particles.push({
        kind: kind,
        x: u * w,
        y: v * h,
        vx: (Math.random() - 0.5) * (kind === "petal" ? 1.4 : 2.8),
        vy: kind === "petal" ? -1.2 - Math.random() * 2.2 : -0.4 - Math.random() * 1.6,
        life: 1,
        decay: 0.012 + Math.random() * 0.018,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.14,
        size: kind === "petal" ? 3 + Math.random() * 5 : 1 + Math.random() * 2.2,
        hue: kind === "petal" ? (Math.random() < 0.55 ? 340 : 0) : 140
      });
    }

    if (particles.length > 420) {
      particles.splice(0, particles.length - 420);
    }
  }

  function updateParticles() {
    var i;
    var p;

    for (i = particles.length - 1; i >= 0; i--) {
      p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy -= p.kind === "dust" ? 0.02 : 0.006;
      p.rot += p.vr;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  function drawParticles(ctx) {
    var i;
    var p;

    for (i = 0; i < particles.length; i++) {
      p = particles[i];
      ctx.save();
      ctx.globalAlpha = p.life * (p.kind === "petal" ? 0.85 : 0.95);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);

      if (p.kind === "petal") {
        ctx.fillStyle = p.hue === 340 ? "rgba(212, 86, 122, 0.9)" : "rgba(255, 248, 252, 0.88)";
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.55, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = "rgba(184, 255, 204, 0.95)";
        ctx.shadowColor = "rgba(0, 255, 120, 0.8)";
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    }
  }

  function coverRect(cw, ch, iw, ih) {
    var scale = Math.max(cw / iw, ch / ih) * 1.02;
    var dw = iw * scale;
    var dh = ih * scale;
    return {
      dx: (cw - dw) * 0.5,
      dy: (ch - dh) * 0.12,
      dw: dw,
      dh: dh
    };
  }

  function revealProgress(t) {
    if (t >= 0.84) return 1.12;
    if (t > 0.76) {
      var tail = (t - 0.76) / 0.08;
      return 0.88 + (1.12 - 0.88) * easeOutCubic(tail);
    }
    return easeOutCubic(t / 0.76) * 0.88;
  }

  function paintPortrait(ctx, w, h, progress, t, withParticles) {
    var rect = coverRect(w, h, imgReady.naturalWidth, imgReady.naturalHeight);
    var glowAlpha = t < 0.58 ? 0.5 : Math.max(0, 0.5 * (1 - (t - 0.58) / 0.1));

    buildMask(progress);

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.filter = "contrast(1.12) grayscale(1)";
    ctx.drawImage(imgReady, rect.dx, rect.dy, rect.dw, rect.dh);
    ctx.restore();

    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(maskCanvas, 0, 0, maskCanvas.width, maskCanvas.height, 0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";

    if (glowAlpha > 0.02 && progress < 0.95) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = glowAlpha;
      ctx.drawImage(maskCanvas, 0, 0, maskCanvas.width, maskCanvas.height, 0, 0, w, h);
      ctx.restore();
    }

    if (withParticles) {
      spawnParticles(progress, w, h, 4);
      updateParticles();
      drawParticles(ctx);
    }
  }

  function finishGommage() {
    window.clearTimeout(fallbackTimer);
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    paintPortrait(ctx, w, h, 1.12, 1, false);
    portrait.classList.remove("is-gommage-running");
    portrait.classList.add("is-gommage-done");
  }

  function drawFrame(now) {
    if (!startTime) startTime = now;
    var elapsed = now - startTime - DELAY;
    var t = Math.max(0, Math.min(1, elapsed / DURATION));
    var progress = revealProgress(t);
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;

    paintPortrait(ctx, w, h, progress, t, t > 0.02 && t < 0.8);

    if (t < 1) {
      rafId = requestAnimationFrame(drawFrame);
    } else {
      finishGommage();
    }
  }

  function start() {
    buildNoise();
    resizeCanvas();
    rafId = requestAnimationFrame(drawFrame);
  }

  function onReady() {
    imgReady = img;
    if (img.complete && img.naturalWidth) {
      start();
    } else {
      img.addEventListener("load", start, { once: true });
    }
  }

  if (img.decode) {
    img.decode().then(onReady).catch(onReady);
  } else {
    onReady();
  }

  window.addEventListener(
    "resize",
    function () {
      if (portrait.classList.contains("is-gommage-done")) {
        resizeCanvas();
        finishGommage();
      } else {
        resizeCanvas();
      }
    },
    { passive: true }
  );

  window.addEventListener("pagehide", function () {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();
