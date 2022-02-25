
"use strict";
// Calculate the total cost of course modules
// global varaibles declared
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const modulePrice = 50;
const discount = 0.75;


document.querySelector('.module').addEventListener('click',
 function() {
  let modules = document.querySelector('.modules').value;
  modules = Number(modules);
  if (modules > 3){
     // calTotal(modules);
     let z = (modulePrice * discount * modules)
     
    document.querySelector('.price').textContent = '$'+ z.toFixed(2);
    numb.toFixed(2)
    
  }
  else {
    let y = (modulePrice * modules)
    document.querySelector('.price').textContent= '$'+y.toFixed(2)};
});

//The pop up click function that opens on click displays content
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


  btnsOpenModal[0].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

