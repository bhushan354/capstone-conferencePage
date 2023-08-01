const speakers = [{
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
] 

document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code goes here
  });


const speakersContainer = document.querySelector('.speakersContainer');
const speakersList = document.querySelector('.speakersList');



speakersContainer.appendChild(speakersList);

const speaker1 = document.createElement('div');
speaker1.setAttribute('class','speaker1')


function generateSpeakersContainer() {
    const speakersList = document.querySelector('.speakersList');
  
    for (let i = 0; i < speakers.length; i += 1) {
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
  
  generateSpeakersContainer();
  
function hamburgerOpen() {
    const section = document.querySelectorAll('section');
    const navbar2 = document.querySelector('.navbar2');

    navbar2.style.display='flex';
    section.forEach(section => {
        section.style.display = 'none';
      });
}

function hamburgerClose() {
    const section = document.querySelectorAll('section');

    const navbar2 = document.querySelector('.navbar2');
    navbar2.style.display='none';

    section.forEach(section => {
        section.style.display = '';
      });
}