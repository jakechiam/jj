// J-Edits - JavaScript goes here
const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', event => {
  body.classList.toggle('offsite-is-open')
})
