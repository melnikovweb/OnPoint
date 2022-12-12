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

function abc(a, b, c) {
  return a + b + c
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f
}

function curry(...arg) {
  const func = this

  if (arg.length !== func.length) {
    return curry.bind(func, ...arg)
  }

  return func(...arg)
}

Object.defineProperty(Function.prototype, 'curry', {
  value: curry,
})

console.log(
  abc.curry('A')('B')('C'), // 'ABC'
  abc.curry('A', 'B')('C'), // 'ABC'
  abc.curry('A', 'B', 'C'), // 'ABC'
)
console.log(
  abcdef.curry('A')('B')('C')('D')('E')('F'), // 'ABCDEF'
  abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), // 'ABCDEF'
)

function drawRating(vote) {
  if (vote < 0) {
    return 'NaN'
  } else if (vote <= 20) {
    return '★☆☆☆☆'
  } else if (vote <= 40) {
    return '★★☆☆☆'
  } else if (vote <= 60) {
    return '★★★☆☆'
  } else if (vote <= 80) {
    return '★★★★☆'
  } else if (vote <= 100) {
    return '★★★★★'
  }
}

console.log(drawRating(0)) // ★☆☆☆☆
console.log(drawRating(1)) // ★☆☆☆☆
console.log(drawRating(50)) // ★★★☆☆
console.log(drawRating(99)) // ★★★★★
