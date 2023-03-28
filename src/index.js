let button = document.querySelector("button");
let h5 = document.querySelector("h5");
let p = document.querySelector("p");

button.addEventListener("click", async () => {
  try {
    let apiJ = await fetch("https://api.adviceslip.com/advice");
    let hh = await apiJ.json();
    h5.innerHTML = `ADVICE #${hh.slip.id} `;
    p.innerHTML = `${hh.slip.advice}`;
  } catch (error) {
    p.innerHTML = `there's a problem getting data please come back later !`;
    p.style.color = "hsl(0, 59%, 58%)";
  }
});
