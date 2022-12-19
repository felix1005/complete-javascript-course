'use strict';

const modalBtn = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.close-modal');

const displayModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const hideModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', displayModal);
}

modalClose.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});

