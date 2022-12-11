let scrollpos = window.scrollY
const header = document.querySelector('.navbar')
const scrollChange = 1
const add_class_on_scroll = () => header.classList.add('active__nav')
const remove_class_on_scroll = () => header.classList.remove('active__nav')

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY

  if (scrollpos >= scrollChange) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})
