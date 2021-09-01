const menu = document.querySelector('.menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');
const main = document.querySelector('.main');
const header = document.querySelector('.bold');
const projs = document.querySelectorAll('.proj');

function projOn() {
  projs.forEach(
    (proj) => {
      proj.style.filter = 'blur(4px)';
    },
  );
}

function projOff() {
  projs.forEach(
    (proj) => {
      proj.style.filter = 'blur(0px)';
    },
  );
}

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    main.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
    projOff();
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    main.style.filter = 'blur(4px)';
    header.style.filter = 'blur(4px)';
    projOn();
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

btn.onclick = function seeP() {
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

function closeP() {
  modal.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

span.onclick = function clickX() {
  closeP();
};

window.onclick = function clickOut(event) {
  if (event.target === modal) {
    closeP();
  }
};
