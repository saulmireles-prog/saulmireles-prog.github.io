
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

const storedName = localStorage.getItem("name");

if (storedName) {
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  const myName = prompt("Please enter your name.");

  if (myName && myName.trim()) {
    const name = myName.trim();
    localStorage.setItem("name", name);
    myHeading.textContent = `Mozilla is cool, ${name}`;
  }
});
