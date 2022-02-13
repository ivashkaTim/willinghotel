const openSelect = () => {
  const selects = document.querySelectorAll('.select');

  selects.forEach((select) => {
    const selectHeader = select.querySelector('.select__header');
    const headerSpan = selectHeader.querySelector('.select__current');
    const selectBody = select.querySelector('.select__list');

    selectHeader.addEventListener('click', () => {
      select.classList.toggle('active');
    });

    selectBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('select__item')) {
        headerSpan.innerText = e.target.innerText;
        select.classList.toggle('active');
      }
    });
  });
};

export default openSelect;
