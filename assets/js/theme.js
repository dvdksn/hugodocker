const themeKey = "theme-preference"

const getPreferredTheme = () => {
  const theme = localStorage.getItem(themeKey)
  if (theme) return theme
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
}

const setPreference = (selectedTheme) => {
  localStorage.setItem(themeKey, selectedTheme)
  reflectPreference()
}

const reflectPreference = () => {
  const preferredTheme = getPreferredTheme()
  if (preferredTheme === "dark") {
    document.firstElementChild.classList.add("dark")
  } else {
    document.firstElementChild.classList.remove("dark")
  }
}

reflectPreference()

function handleThemeSwitch() {
  const currentTheme =
    document.firstElementChild.classList.value === "dark" ? "dark" : "light"

  if (currentTheme === "light") {
    setPreference("dark")
  } else {
    setPreference("light")
  }

  updateThemeIcon()
}

function updateThemeIcon() {
  const themeSwitch = document.querySelector("#theme-toggle")
  const theme = getPreferredTheme()
  themeSwitch.innerText = `${theme}_mode`
}

window.onload = () => {
  const themeSwitch = document.querySelector("#theme-toggle")
  updateThemeIcon()
  themeSwitch.addEventListener("click", handleThemeSwitch)
}
