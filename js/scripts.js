const menu = document.querySelector('.menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');
const main = document.querySelector('.main');
const logo = document.querySelector('.bold');
const header = document.getElementById('logo');
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
    logo.style.filter = 'blur(0px)';
    projOff();
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    main.style.filter = 'blur(4px)';
    logo.style.filter = 'blur(4px)';
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

const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const xp1 = document.getElementsByClassName('xp1')[0];
const xp2 = document.getElementsByClassName('xp2')[0];
const xp3 = document.getElementsByClassName('xp3')[0];
const xp4 = document.getElementsByClassName('xp4')[0];

btn1.onclick = function seeP1() {
  modal1.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

btn2.onclick = function seeP2() {
  modal2.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

btn3.onclick = function seeP3() {
  modal3.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

btn4.onclick = function seeP4() {
  modal4.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

function closeP1() {
  modal1.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

function closeP2() {
  modal2.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

function closeP3() {
  modal3.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

function closeP4() {
  modal4.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

xp1.onclick = function x1() {
  closeP1();
};

xp2.onclick = function x2() {
  closeP2();
};

xp3.onclick = function x3() {
  closeP3();
};

xp4.onclick = function x4() {
  closeP4();
};

window.onclick = function clickOut(event) {
  if (event.target === modal1) {
    closeP1();
  } else if (event.target === modal2) {
    closeP2();
  } else if (event.target === modal3) {
    closeP3();
  } else if (event.target === modal4) {
    closeP4();
  }
};
