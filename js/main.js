'use strict';

{
  const lis = document.querySelectorAll('li');
  const sections = document.querySelectorAll('section');

  lis.forEach((li, index) => {
    li.addEventListener('click', ()=>{
      li.classList.toggle('active')

      lis.forEach(el => {
        if (li !==el){
          el.classList.remove('active');
        }
      });
      sections.forEach(sEl =>{
        sEl.classList.remove('active');
      });
      sections[index].classList.add('active');
    });
  });
}
