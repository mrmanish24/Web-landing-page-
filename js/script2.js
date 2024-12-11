const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//capturing
child.addEventListener(
  "click",
  () => {
    console.log("capturing!! child");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("capturing!! parent");
  },
  true
);

grandparent.addEventListener(
  "click",
  () => {
    console.log("capturing!! grandparent");
  },
  true
);

//not capturing

child.addEventListener("click", () => {
  console.log("you clicked child");
});

parent.addEventListener("click", () => {
  console.log("you clicked parent");
});

grandparent.addEventListener("click", () => {
  console.log("you clicked grandparent");
});
