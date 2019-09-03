// START EDITING YOUR JAVASCRIPT HERE
// ===============

const component = document.querySelector('.tabbed-component')
const tabs = Array.from(component.querySelectorAll('.tab'))
const contents = Array.from(component.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    const aLink = tab.children[0]
    const href = aLink.getAttribute('href')
    const corrContent = component.querySelector(href)

    tabs.forEach(el => { el.classList.remove('is-selected') })
    contents.forEach(el => { el.classList.remove('is-selected') })

    tab.classList.add('is-selected')
    corrContent.classList.add('is-selected')
  })
})
