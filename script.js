'use strict';
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let n = 0; n < showModal.length; n++ )
showModal[n].addEventListener('click', displayModal);

function displayModal () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

closeModal.addEventListener('click', hideModal);
function hideModal () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
overlay.addEventListener('click', hideModal);

//hiding the modal when an Esc or Backspace key is entered
document.addEventListener('keydown', function (ev) {
    // console.log(ev.key) 
    if(ev.key==='Escape'||'Backspace' &&  !modal.classList.contains('hidden')){
        hideModal()
    }
    
})
