// Chapter 6: Event Delegation
// Attach JUST ONE click eventListener to PARENT accordionContainer, that catches all events bubblingUp
// On ONE click eventListener, check if event delegation bubbleUps to inner accordion-header
//   IF yes, then get parentElement of accordion-header, and toggle its 'is-open' class

const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (accordionHeader) {
    const accordion = accordionHeader.parentElement
    accordion.classList.toggle('is-open')
  }
})
