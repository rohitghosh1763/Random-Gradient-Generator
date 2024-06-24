const btn = document.querySelector("#btn");
const html = document.querySelector("html");
const display = document.querySelector("#display");
const p = document.querySelector("p");
const positionNames = ["left", "right", "bottom", "top"];
function position() {
    return positionNames[Math.floor(Math.random() * 4)];
}
const rInt = () => {
    return Math.floor(Math.random() * 255) + 1;
};
console.log(position());

btn.addEventListener("click", () => {
    const color = `linear-gradient(to ${position()}, rgb(${rInt()},${rInt()},${rInt()}), rgb(${rInt()},${rInt()},${rInt()}))`;
    display.style.background = color;
    console.log(color);
    p.innerText = `Css Code ->  background:${color};`;
});
window.onload = () => {
    const color = `linear-gradient(to ${position()}, rgb(${rInt()},${rInt()},${rInt()}), rgb(${rInt()},${rInt()},${rInt()}))`;
    display.style.background = color;
    console.log(color);
    p.innerText = `Css Code -> background:${color};`;
};
