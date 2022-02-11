const changeTabs = () => {
	const tabs = document.querySelectorAll('.tabs')

	tabs.forEach(tab=> {
		const buttons = tab.querySelectorAll('.tabs__button')

		tab.addEventListener('click',(e)=>{
			if(e.target.classList.contains('tabs__button')){
				buttons.forEach(btn=> {
					btn.classList.remove('tabs__button--active')
				})
				e.target.classList.add('tabs__button--active')
			}
		})
	})
}

export default changeTabs