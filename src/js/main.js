const btnMode = document.querySelector('.btn-mode')
const darkmode = localStorage.getItem('darkmode')

const setMode = (value) => {
  mode = value
  localStorage.setItem('darkmode', JSON.stringify(value))

  if(value) {
    document.body.classList.add('darkmode')
    document.body.classList.remove('lightmode')
  } else {
    document.body.classList.add('lightmode')
    document.body.classList.remove('darkmode')
  }
}

let mode = darkmode == null ? true : JSON.parse(darkmode)
setMode(mode)

btnMode.addEventListener('click', () => setMode(!mode))
