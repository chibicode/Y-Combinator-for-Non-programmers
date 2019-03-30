export default (el?: HTMLElement | null) => {
  if (el) {
    const documentScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    return el.getBoundingClientRect().top + documentScrollTop
  } else {
    return 0
  }
}
