(() => {
  const baseUrl = `https://res.cloudinary.com/${cloudinary}/image/fetch`

  Array.from(document.querySelectorAll('[data-bg]')).forEach(image => {
    const { clientWidth, clientHeight } = image
    const pixelRatio = window.devicePixelRatio || 1.0
    const imageParams = `w_${100 * Math.round(clientWidth * pixelRatio / 100)},h_${100 * Math.round(clientHeight * pixelRatio / 100)},c_fill,g_auto,f_auto`
    const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`
    image.style.backgroundImage = `url('${url}')`
  })
})()


// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );