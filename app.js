const speakers = [
  {
    img: 'images/smriti.jpg',
    name: ' S Mandana',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/abd.jpg',
    name: 'AB Devilliars',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/vk.jpg',
    name: 'Virat Kohli',
    about: 'cricket player , All-Rounder',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/willi.jpg',
    name: 'K Williamson',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/perry.jpg',
    name: 'E perry',
    about: 'cricket player , All-Rounder',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/speaker1.png',
    name: 'D Broadman',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
];

const speakersContainer = document.querySelector('.speakersContainer');
const speakersList = document.querySelector('.speakersList');

speakersContainer.appendChild(speakersList);

const speaker1 = document.createElement('div');

// button
const seebtn = document.createElement('div');
seebtn.setAttribute('class', 'seeBtn');
seebtn.innerHTML = ` <button class="seeMore">More ▽</button>
<button class="seeLess" style="display: none;">Less △</button>`;
speakersContainer.appendChild(seebtn);

function generateSpeakersContainer1() {
  const speakerCount = window.matchMedia('(min-width: 768px)').matches ? speakers.length : 2;

  for (let i = 0; i < speakerCount; i += 1) {
    const speakerDiv = document.createElement('div');
    speakerDiv.setAttribute('class', 'speaker1');

    speakerDiv.innerHTML = `
        <div class="speakerImg">
          <img src="${speakers[i].img}" alt="speaker">
        </div>
        <div class="infoSpeaker">
          <h2>${speakers[i].name}</h2>
          <h3>${speakers[i].about}</h3>
          <hr class="greyLine">
          <p>${speakers[i].para}</p>
        </div>
        
      `;

    speakersList.appendChild(speakerDiv);
  }
}
/// remove function
function removeGeneratedSpeakers() {
  const generatedSpeakers = document.querySelectorAll('.speaker1');
  generatedSpeakers.forEach((speaker) => {
    speaker.remove();
  });
}

function generateSpeakersContainer2() {
  for (let i = 2; i < 6; i += 1) {
    const speakerDiv = document.createElement('div');
    speakerDiv.setAttribute('class', 'speaker1');

    speakerDiv.innerHTML = `
        <div class="speakerImg">
          <img src="${speakers[i].img}" alt="speaker">
        </div>
        <div class="infoSpeaker">
          <h2>${speakers[i].name}</h2>
          <h3>${speakers[i].about}</h3>
          <hr class="greyLine">
          <p>${speakers[i].para}</p>
        </div>
       
      `;

    speakersList.appendChild(speakerDiv);
  }
}
generateSpeakersContainer1();

speaker1.setAttribute('class', 'speaker1');

// buttons
const seeMoreButton = document.querySelector('.seeMore');
const seeLessButton = document.querySelector('.seeLess');
// seemore buttom
seeMoreButton.addEventListener('click', () => {
  generateSpeakersContainer2();
  seeLessButton.style.display = '';
  seeMoreButton.style.display = 'none';
});
// seeless button
seeLessButton.addEventListener('click', () => {
  seeMoreButton.style.display = '';
  removeGeneratedSpeakers();
  generateSpeakersContainer1();
  seeLessButton.style.display = 'none';
});

// hamburger button
const openButton = document.querySelector('.hamburgerOpen');

function hamburgerOpen() {
  const section = document.querySelectorAll('section');
  const navbar2 = document.querySelector('.navbar2');

  navbar2.style.display = 'flex';
  section.forEach((section) => {
    section.style.display = 'none';
  });
}

openButton.addEventListener('click', () => {
  hamburgerOpen();
});

const aboutLink = document.getElementById('aboutLink');
const homeLink = document.getElementById('homeLink');

const closeButton = document.querySelector('.hamburgerClose');

function hamburgerClose() {
  const section = document.querySelectorAll('section');

  const navbar2 = document.querySelector('.navbar2');
  navbar2.style.display = 'none';

  for (let i = 0; i < section.length - 2; i += 1) {
    section[i].style.display = '';
  }
  homeLink.style.display = 'none';
  aboutLink.style.display = 'flex';
}

closeButton.addEventListener('click', () => {
  hamburgerClose();
});

// open for about page
const openButton1 = document.querySelector('.hamburgerOpen1');

function hamburgerOpen1() {
  const section = document.querySelectorAll('section');
  const navbar2 = document.querySelector('.navbar2');

  navbar2.style.display = 'flex';
  for (let i = 0; i < section.length - 1; i += 1) {
    section[i].style.display = 'none';
  }
  aboutLink.style.display = 'none';
  homeLink.style.display = '';
}

openButton1.addEventListener('click', () => {
  hamburgerOpen1();
});

// about page fucntion

function hamburgerClose11() {
  const section = document.querySelectorAll('section');

  const navbar2 = document.querySelector('.navbar2');
  navbar2.style.display = 'none';

  for (let i = 0; i < section.length - 1; i += 1) {
    section[i].style.display = 'none';
  }
  homeLink.style.display = 'none';
  aboutLink.style.display = 'flex';
}

//  home function

function home() {
  const section = document.querySelectorAll('section');

  const navbar2 = document.querySelector('.navbar2');
  navbar2.style.display = 'none';

  for (let i = 0; i < section.length - 2; i += 1) {
    section[i].style.display = '';
  }
  homeLink.style.display = 'none';
  aboutLink.style.display = 'flex';
}

homeLink.addEventListener('click', home);

// open about
function openAbout() {
  const aboutPageContainer = document.querySelector('.aboutPageContainer');

  hamburgerClose11();

  if (aboutPageContainer.style.display === 'none') {
    aboutPageContainer.style.display = '';
  } else {
    aboutPageContainer.style.display = '';
  }
}
const aboutLink1 = document.getElementById('aboutLink');
aboutLink1.addEventListener('click', openAbout);
