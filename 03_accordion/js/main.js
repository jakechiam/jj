// Chapter 4: Iterating through Each of the 4 Accordions, (using a forEach loop)
// forEach Accordion: add a click event listener(with a callback that toggles .is-open in parent Accordion)

const accordionsArr = Array.from(document.querySelectorAll('.accordion'))

accordionsArr.forEach(iAccordion => {
  const iAccordionHeader = iAccordion.querySelector('.accordion__header')
  iAccordionHeader.addEventListener('click', evt => {
    iAccordion.classList.toggle('is-open')
  })
})
