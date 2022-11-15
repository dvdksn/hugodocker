const searchBtn = document.querySelector("#search-btn")
const searchInput = searchBtn.nextElementSibling

function handleSearchClick() {
  searchInput.focus()
}

// function handleSearchBlur() {
//   searchInput.style.width = 0;
// }

searchBtn.addEventListener("click", handleSearchClick)
// searchBtn.addEventListener("blur", handleSearchBlur)
