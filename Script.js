function changeBackgroundColor() {
    const colors = ["0000ff", "00ff00", "ff0000", "000000"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
