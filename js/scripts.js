const menu = document.querySelector('.menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');
const main = document.querySelector('.main');
const header = document.querySelector('.bold');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    main.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    main.style.filter = 'blur(4px)';
    header.style.filter = 'blur(4px)';
  }
}

ham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(
  (menuLink) => {
    menuLink.addEventListener('click', toggleMenu);
  },
);

const modal = document.getElementById('myModal');
const btn = document.getElementById('btn1');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
