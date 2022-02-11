const openSelect =() => {
	const selects = document.querySelectorAll('.select')
	
	selects.forEach(select => {
		const selectHeader = select.querySelector('.select__header')
		const headerSpan = selectHeader.querySelector('.select__current')
		const selectBody = select.querySelector('.select__body')

		selectHeader.addEventListener('click', ()=> {
			selectBody.classList.toggle('select__body_active')
		})

		selectBody.addEventListener('click', (e)=> {
			if(e.target.classList.contains('select__item')){
				headerSpan.innerText = e.target.innerText;
				selectBody.classList.toggle('select__body_active')	
			}
		})
	})
}

export default openSelect