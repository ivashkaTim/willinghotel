const changeLinkActive = (links, link, active ) => {
	const tabs = document.querySelectorAll(links)

	tabs.forEach(tab=> {
		const buttons = tab.querySelectorAll('.'+ link)

		tab.addEventListener('click',(e)=>{
			if(e.target.classList.contains(link)){
				buttons.forEach(btn=> {
					btn.classList.remove(active)
				})
				e.target.classList.add(active)
			}
		})
	})
}

export default changeLinkActive