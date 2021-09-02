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

document.querySelectorAll('.menuLink').forEach(
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

const modalSubt = document.getElementById('modalSubt');
const modalTech = document.getElementById('modalTech');

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
  document.getElementById('modalTitle').textContent = modalObj[modal].title;
  addSubt(modal);
  document.getElementById('modalDesc').textContent = modalObj[modal].desc;
  addTechs(modal);
  document.getElementById('modalImg').src = modalObj[modal].img;
  document.getElementById('modalBtn1').setAttribute('onClick', `location.href='${modalObj[modal].live}';`);
  document.getElementById('modalBtn2').setAttribute('onClick', `location.href='${modalObj[modal].source}';`);
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

function haveUpper(str) {
  return /[A-Z]/.test(str);
}

document.querySelector('form').addEventListener('submit', (event) => {
  const formEmail = document.getElementById('form-email');
  const alert = document.querySelector('.alert');
  if (haveUpper(formEmail.value)) {
    alert.innerHTML = 'Your e-mail needs to be in lowercase';
    alert.style.visibility = 'visible';
    event.preventDefault();
  } else {
    alert.style.visibility = 'hidden';
  }

  setTimeout(() => {
    alert.style.visibility = 'hidden';
  }, 5000);
});

const store = () => {
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const text = document.getElementById('form-text').value;
  const formObj = {
    name,
    email,
    text,
  };

  localStorage.setItem('formObj', JSON.stringify(formObj));
};

const dataObj = localStorage.getItem('formObj');
if (dataObj) {
  const parseObj = JSON.parse(dataObj);
  document.getElementById('form-name').value = parseObj.name;
  document.getElementById('form-email').value = parseObj.email;
  document.getElementById('form-text').value = parseObj.text;
}

const allInputs = Array.from(document.querySelectorAll('.smooth_border'));
allInputs.map((input) => {
  input.addEventListener('keyup', store);
  return true;
});
