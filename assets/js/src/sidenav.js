function handleSectionClick(e) {
  const sectionElement = e.target.parentElement.parentElement
  sectionElement.classList.toggle("expanded")
  if (sectionElement.classList.contains("expanded")) {
    e.target.textContent = "expand_more"
  } else {
    e.target.textContent = "chevron_right"
  }
}

// Scroll the given menu item into view. We actually pick the item *above*
// the current item to give some headroom above
function scrollMenuItem() {
  const sidenav = document.querySelector(".sidenav")
  let item = sidenav.querySelector(".active")
  if (!item) return
  if (item.previousElementSibling) {
    item = item.previousElementSibling
  } else {
    item = item.parentElement.closest("li")
  }
  if (item) {
    const itemY = item.getBoundingClientRect().y
    // scroll to the item y-coord (with a 150px padding for some head room)
    if (itemY > window.innerHeight - 150) {
      sidenav.scrollTop = itemY - 150
    }
  }
}

const sidenav = document.querySelector(".sidenav")
if (sidenav) {
  scrollMenuItem()
  const sections = sidenav.querySelectorAll("button")
  Array.from(sections).forEach((s) =>
    s.addEventListener("click", handleSectionClick)
  )
}
