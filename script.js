const menuContainer = document.getElementById('menu_container');
const hamburger = document.getElementById('menu_icon');
const xMenu = document.getElementById('x-menu');
const menuLink = document.querySelectorAll('.menu-link');
const form = document.querySelector('#contact_form');
const EMAIL_INVALID = 'Please use lowercase letters for your email';

hamburger.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

xMenu.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menuContainer.style.display = 'none';
    }
  });
}

const projects = [
  {
    name: 'Tonic',
    mobile_img: './images/SnapshootPortfolio1.png',
    desktop_img: './images/SnapshootPortfolioDesktop1.png',
    info: ['CANOPY', 'Front End Dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    short_desciption:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live_link: '',
    source_link: '',
  },
  {
    name: 'Multi-Post Stories',
    mobile_img: './images/SnapshootPortfolio2.png',
    desktop_img: './images/SnapshootPortfolioDesktop2.png',
    info: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    short_desciption:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live_link: '',
    source_link: '',
  },
  {
    name: 'Facebook 360',
    mobile_img: './images/SnapshootPortfolio3.png',
    desktop_img: './images/SnapshootPortfolioDesktop3.png',
    info: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    short_desciption:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tags: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live_link: '',
    source_link: '',
  },
  {
    name: 'Uber Navigation',
    mobile_img: './images/SnapshootPortfolio4.png',
    desktop_img: './images/SnapshootPortfolioDesktop4.png',
    info: ['Uber', 'Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    short_desciption:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live_link: '',
    source_link: '',
  },
];

const works = document.getElementById('works');
for (let i = 0; i < projects.length; i += 1) {
  let tagsList = '';
  for (let j = 0; j < projects[i].tags.length; j += 1) {
    tagsList += `<li>${projects[i].tags[j]}</li>`;
  }
  const card = document.createElement('div');
  card.innerHTML = `
    <div class="card">
          <div class="pv pv${i + 1}">
            <img
              class="preview"
              src="${projects[i].mobile_img}"
              alt="Website Preview"
            />
          </div>
          <div class="card_details">
            <h2>${projects[i].name}</h2>
            <div class="type_and_date">
              <span>${projects[i].info[0]}</span>
              <span>●</span>
              <span>${projects[i].info[1]}</span>
              <span>●</span>
              <span>${projects[i].info[2]}</span>
            </div>
            <p>${projects[i].short_desciption}</p>
            <ul class="prog_lang">${tagsList}</ul>
            <button type="button" id="see_project_${i + 1}">See Project</button>
          </div>
        </div>`;
  works.appendChild(card);
}

function createPopup(cardNo) {
  let tagsList = '';
  for (let j = 0; j < projects[cardNo].tags.length; j += 1) {
    tagsList += `<li>${projects[cardNo].tags[j]}</li>`;
  }
  const popupWindow = document.createElement('div');
  popupWindow.innerHTML = `<div id="popup_container" class="popup_container">
<div class="popup_card">
  <div class="popup_title">
    <img id="x-popup" src="./images/x-dark.png" alt="">
    <h2>${projects[cardNo].name}</h2>
    <div class="info">
      <span>${projects[cardNo].info[0]}</span>
      <span>●</span>
      <span>${projects[cardNo].info[1]}</span>
      <span>●</span>
      <span>${projects[cardNo].info[2]}</span>
    </div>
  </div>
  <div class="popup_pv pv${cardNo + 1}">
    <img
      class="preview"
      src="${projects[cardNo].mobile_img}"
      alt="Website Preview"
    />
  </div>
  <div class="popup_details">
  <p>${projects[cardNo].description}</p>
    <div>
      <ul class="prog_lang">${tagsList}</ul>
      <hr>
      <div class="popup_btn">
        <button type="button" href="${
  projects[cardNo].live_link
}">See Live <img src="./images/live-icon.svg" alt=""></button>
        <button type="button" href="${
  projects[cardNo].source_link
}">See source <img src="./images/source-icon.svg" alt=""></button>
      </div>
    </div>
  </div>
</div>
</div>`;
  works.appendChild(popupWindow);
}

for (let i = 0; i < projects.length; i += 1) {
  const seeProject = document.getElementById(`see_project_${i + 1}`);
  seeProject.addEventListener('click', () => {
    createPopup(i);
    const xPopup = document.getElementById('x-popup');
    const popupContainer = document.getElementById('popup_container');
    xPopup.addEventListener('click', () => {
      popupContainer.remove();
    });
  });
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    input.value = '';
    const msg = input.parentNode.querySelector('small');
    msg.innerText = invalidMsg;
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});

// Form Input Local storage
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

function populateStorage() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('message', document.getElementById('message').value);
}

function fillForm() {
  document.getElementById('name').value = localStorage.getItem('name');
  document.getElementById('email').value = localStorage.getItem('email');
  document.getElementById('message').value = localStorage.getItem('message');
}

if (storageAvailable('localStorage')) {
  if (localStorage.getItem('name')) {
    fillForm();
  }

  form.addEventListener('submit', () => {
    populateStorage();
  });
}
