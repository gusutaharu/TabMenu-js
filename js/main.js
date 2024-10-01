'use strict';

{
  const lis = document.querySelectorAll('li');
  const sections = document.querySelectorAll('section');

  lis.forEach((li, index) => {
    li.addEventListener('click', () =>{
      lis.forEach(el =>{
        el.classList.remove('active');
      });
      li.classList.add('active');
      sections.forEach(sEl =>{
        sEl.classList.remove('active');
      });
      sections[index].classList.add('active');
    });
  });
}
