const speakers = [
  {
    img: 'images/speaker1.png',
    name: 'Virat Kohli',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/speaker1.png',
    name: 'Virat Kohli',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/speaker1.png',
    name: 'Virat Kohli',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/speaker1.png',
    name: 'Virat Kohli',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/speaker1.png',
    name: 'Virat Kohli',
    about: 'cricket player , Batsman',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ',
  },
  {
    img: 'images/speaker1.png',
    name: 'Virat Kohli',
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
seebtn.innerHTML = ` <button class="seeMore">see more</button>
<button class="seeLess" style="display: none;">see less</button>`;
speakersContainer.appendChild(seebtn);

function generateSpeakersContainer1() {
  for (let i = 0; i < 2; i += 1) {
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

const closeButton = document.querySelector('.hamburgerClose');
function hamburgerClose() {
  const section = document.querySelectorAll('section');

  const navbar2 = document.querySelector('.navbar2');
  navbar2.style.display = 'none';

  section.forEach((section) => {
    section.style.display = '';
  });
}

closeButton.addEventListener('click', () => {
  hamburgerClose();
});
