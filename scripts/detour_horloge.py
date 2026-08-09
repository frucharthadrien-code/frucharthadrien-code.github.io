"""Détoure Horloge Houriez depuis capture fond blanc (Bloc-notes)."""
from pathlib import Path

from PIL import Image, ImageDraw

SRC = Path(
    r"C:\Users\User\.cursor\projects\c-Travail-Dev-Solo\assets"
    r"\c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-26f56c9c-0bcc-475b-bd50-c86b5e194e6d.png"
)
OUT = Path(r"C:\Travail Dev Solo\Portfolio\assets\horloge-houriez\horloge-houriez.png")

WHITE = 248


def is_white(px: tuple) -> bool:
    r, g, b = px[:3]
    return r >= WHITE and g >= WHITE and b >= WHITE


def find_bbox(rgb: Image.Image) -> tuple[int, int, int, int]:
    w, h = rgb.size
    cx, cy = w // 2, h // 2 - 10

    top = bottom = None
    for y in range(cy, 40, -1):
        if not is_white(rgb.getpixel((cx, y))):
            top = y
        elif top is not None:
            top = y + 1
            break

    for y in range(cy, h - 40):
        if not is_white(rgb.getpixel((cx, y))):
            bottom = y
        elif bottom is not None:
            bottom = y - 1
            break

    lefts, rights = [], []
    for y in range(top, bottom + 1, 8):
        lx = next((x for x in range(cx) if not is_white(rgb.getpixel((x, y)))), None)
        rx = None
        for x in range(cx, w):
            if not is_white(rgb.getpixel((x, y))):
                rx = x
            elif rx is not None:
                break
        if lx is not None and rx is not None and rx - lx > 200:
            lefts.append(lx)
            rights.append(rx)

    return min(lefts), top, max(rights), bottom


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC).convert("RGBA")
    rgb = src.convert("RGB")
    left, top, right, bottom = find_bbox(rgb)
    pad = 1
    crop = src.crop((left - pad, top - pad, right + pad + 1, bottom + pad + 1))

    px = crop.load()
    cw, ch = crop.size
    for y in range(ch):
        for x in range(cw):
            r, g, b, a = px[x, y]
            if is_white((r, g, b)):
                px[x, y] = (r, g, b, 0)

    radius = min(cw, ch) // 8
    rounded = Image.new("L", crop.size, 0)
    ImageDraw.Draw(rounded).rounded_rectangle((0, 0, cw - 1, ch - 1), radius=radius, fill=255)
    for y in range(ch):
        for x in range(cw):
            r, g, b, a = px[x, y]
            px[x, y] = (r, g, b, min(a, rounded.getpixel((x, y))))

    crop.save(OUT, optimize=True)
    print(f"OK size={crop.size} bbox=({left},{top},{right},{bottom}) -> {OUT}")


if __name__ == "__main__":
    main()
