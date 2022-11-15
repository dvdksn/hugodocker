const submenus = document.querySelectorAll(".header-submenu")

function handleMenuHoverEnter(event) {
  event.currentTarget.parentElement.classList.add("hovering")
}

function handleMenuHoverLeave(event) {
  event.currentTarget.parentElement.classList.remove("hovering")
}

submenus.forEach((menu) =>
  menu.addEventListener("mouseenter", handleMenuHoverEnter)
)
submenus.forEach((menu) =>
  menu.addEventListener("mouseleave", handleMenuHoverLeave)
)
