// Chapter 6: Event Delegation
// Attach JUST ONE click eventListener to PARENT accordionContainer, that catches all events bubblingUp
// On ONE click eventListener, check if event delegation bubbleUps to inner accordion-header
//   IF yes, then toggle the accordion opening/closing functionality

const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (accordionHeader) {
    const accordion = accordionHeader.parentElement
    const accordionContent = accordionHeader.nextElementSibling
    const accordionInner = accordionContent.children[0]

    let height

    if (accordion.classList.contains('is-open')) {
      height = 0
    } else {
      height = accordionInner.getBoundingClientRect().height
    }

    accordion.classList.toggle('is-open')
    accordionContent.style.height = height + 'px'

    /* J: Tweak to Enable ONLY ONE accordion tab to be open at any one time */
    // const accordionsArr = Array.from(accordionContainer.children)
    // accordionsArr.forEach(acc => {
    //   if (acc === accordion) {
    //     accordion.classList.toggle('is-open')
    //     accordionContent.style.height = height + 'px'
    //   } else {
    //     acc.classList.remove('is-open')
    //     acc.querySelector('.accordion__content').style.height = 0 + 'px'
    //   }
    // })
  }
})
