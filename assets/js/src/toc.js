const toc = document.querySelector("#TableOfContents")
const tocLinks = toc.querySelectorAll("a[href]")
const anchors = document.querySelectorAll("a.anchor.h2[name], a.anchor.h3[name]")
const anchorLinks = Array.from(anchors)
  .map((a) => [a.offsetTop+10, `#${a.name}`])
  .sort((a, b) => (a[0] > b[0] ? 1 : 0))
let closestHeading

function findClosestHeading() {
  yPos = window.scrollY
  closest = anchorLinks.reduce((prev, curr) => {
    return Math.abs(curr[0] - yPos) < Math.abs(prev[0] - yPos) &&
      curr[0] <= yPos
      ? curr
      : prev
  })
  return closest
}

function updateToc() {
  tocLinks.forEach((a) => {
    a.getAttribute("href") !== closestHeading[1]
      ? (a.className = "")
      : (a.className = "active")
  })
}

function handleScroll() {
  closestHeading = findClosestHeading()
  updateToc()
}

window.addEventListener("scroll", handleScroll)
