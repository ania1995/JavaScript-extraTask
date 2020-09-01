const newArray = document.querySelectorAll(".first-attempt");

// findClass.forEach(function (currentValue, currentIndex) {
//   currentIndex.classList = `active`;
// });

for (let i = 0; i < newArray.length; i++) {
  newArray[i].classList.add("active");
}
