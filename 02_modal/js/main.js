const modalButton = document.querySelector('.jsModalButton')
modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

const modalCloseButton = document.querySelector('.jsModalClose')
modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})
