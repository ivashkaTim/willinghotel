const openBurgerMenu = () =>{
	const burgerMenu = document.querySelector('.hamburger ')
	const headerMenu = document.querySelector('.header__menu')
	const links = document.querySelectorAll('.nav__link')
	const body = document.querySelector('body')


	burgerMenu.addEventListener('click', ()=> {
		burgerMenu.classList.toggle('hamburger_active')
		headerMenu.classList.toggle('header__menu--active')
		body.classList.toggle('no-scroll')
	})

	links.forEach(link => {
		link.addEventListener('click', () => {
			burgerMenu.classList.toggle('hamburger_active')
			headerMenu.classList.toggle('header__menu--active')
			body.classList.toggle('no-scroll')
		})
	})

}
export default openBurgerMenu