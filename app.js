function clickMe() {
  let name = prompt("HELLO! What is your name?");
  if (name) {
    let heading = document.querySelector(".welcomingHeading");
    heading.textContent =
      "Hello" +
      name +
      ". Join me on this tasty journey as we explore new recipes and the joy of sharing meals.Welcome home " +
      name +
      "! ";
  }
}
let button = document
  .getElementById("clickButton")
  .addEventsListener("click", clickMe);
