// openenig and closing modal
let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Make sure the image paths here match the actual file names
    //openModal(`./assets/Img${index - 1}.jpeg`);
  });
});

close.addEventListener("click", () => {
  // This will hide the wrapper when the 'X' is clicked
  console.log("clicked");
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
