// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
export const isPassiveSupported = () => {
  let passiveSupported = false
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () { // eslint-disable-line
        passiveSupported = true
      },
    })

    const handler = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    window.addEventListener('test', handler, options)
    window.removeEventListener('test', handler, options)
  } catch (err) {
    passiveSupported = false
  }
  return passiveSupported
}
