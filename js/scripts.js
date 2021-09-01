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

const modalObj = {
  modal1: {
    title: 'Tonic',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/snapshot1-details.png',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://lfmnovaes.github.io/portfolio/',
    source: 'https://github.com/lfmnovaes/portfolio',
  },
  modal2: {
    title: 'Multi-Post Stories',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/snapshot1-details.png',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://lfmnovaes.github.io/portfolio/',
    source: 'https://github.com/lfmnovaes/portfolio',
  },
  modal3: {
    title: 'Tonic',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/snapshot1-details.png',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://lfmnovaes.github.io/portfolio/',
    source: 'https://github.com/lfmnovaes/portfolio',
  },
  modal4: {
    title: 'Multi-Post Stories',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/snapshot1-details.png',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://lfmnovaes.github.io/portfolio/',
    source: 'https://github.com/lfmnovaes/portfolio',
  },
};

const modalTitle = document.getElementById('modalTitle');
const modalSubt = document.getElementById('modalSubt');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalImg = document.getElementById('modalImg');
const modalBtn1 = document.getElementById('modalBtn1');
const modalBtn2 = document.getElementById('modalBtn2');

function addCounter() {
  const counter = document.createElement('img');
  counter.src = 'icon/counter.png';
  counter.alt = 'counter';
  modalSubt.appendChild(counter);
}

function addSubt(modal) {
  const firstDiv = document.createElement('div');
  firstDiv.className = 'font500 black font18-24';
  modalSubt.appendChild(firstDiv);
  [firstDiv.innerHTML] = modalObj[modal].subt;
  modalObj[modal].subt.slice(1).forEach((i) => {
    addCounter();
    const otherDiv = document.createElement('div');
    otherDiv.className = 'gray font18-24';
    modalSubt.appendChild(otherDiv);
    otherDiv.innerHTML = i;
  });
}

function addTechs(modal) {
  modalObj[modal].tech.forEach((i) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(i));
    modalTech.appendChild(li);
  });
}

function clearModal() {
  modalTech.innerHTML = '';
  modalSubt.innerHTML = '';
}

function popModal(modal) {
  modalTitle.textContent = modalObj[modal].title;
  addSubt(modal);
  modalDesc.textContent = modalObj[modal].desc;
  addTechs(modal);
  modalImg.src = modalObj[modal].img;
  modalBtn1.setAttribute('onClick', `location.href='${modalObj[modal].live}';`);
  modalBtn2.setAttribute('onClick', `location.href='${modalObj[modal].source}';`);
}

const modal = document.getElementById('myModal');
const mBtn1 = document.getElementById('mBtn1');
const mBtn2 = document.getElementById('mBtn2');
const mBtn3 = document.getElementById('mBtn3');
const mBtn4 = document.getElementById('mBtn4');
const xp = document.getElementsByClassName('xp')[0];

mBtn1.onclick = function seeP1() {
  popModal('modal1');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

mBtn2.onclick = function seeP2() {
  popModal('modal2');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

mBtn3.onclick = function seeP3() {
  popModal('modal3');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

mBtn4.onclick = function seeP4() {
  popModal('modal4');
  modal.style.display = 'block';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  projOn();
};

function closeModal() {
  modal.style.display = 'none';
  main.style.filter = 'blur(0px)';
  header.style.filter = 'blur(0px)';
  projOff();
}

xp.onclick = function x() {
  closeModal();
  clearModal();
};

window.onclick = function clickOut(event) {
  if (event.target === modal) {
    closeModal();
    clearModal();
  }
};
