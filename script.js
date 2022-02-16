const showNav = () => {
  document.querySelector('.nav__links').classList.toggle('showLinks')
}
document.querySelector('.nav__btn').addEventListener('click', showNav);


