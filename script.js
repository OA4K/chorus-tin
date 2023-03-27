const test = () => {
    console.log('Hi')
}

const button = document.getElementById("move-button");

button.addEventListener("click", () => {
  const currentLeft = button.style.left ? parseInt(button.style.left) : 0;
  button.style.left = `${currentLeft + 1}px`;
});