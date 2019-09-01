const container = document.querySelector('.accordion-container')
container.addEventListener('click', e => {
  const header = e.target.closest('.accordion__header')
  if (!header) return

  const accordion = header.parentElement
  accordion.classList.toggle('is-open')
})
