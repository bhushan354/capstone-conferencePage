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



const speakersContainer = document.querySelector('.speakersContainer');
const speakersList = document.querySelector('.speakersList');



speakersContainer.appendChild(speakersList);

const speaker1 = document.createElement('div');
speaker1.setAttribute('class','speaker1')

speakersList.appendChild(speaker1);

function generateSpeakersContainer(){
for(let i =0; i <=speakers.length; i+=1){

    speaker1.innerHTML = `
    
          <div class="speakerImg">
            <img src = ${speakers[i].img} alt="speaer">
          </div>
          <div class="infoSpeaker">
            <h2>${speakers[i].name}</h2>
            <h3>${speakers[i].about}</h3>
            <hr class="greyLine">
            <p>${speakers[i].para}</p>
          </div>
       
    `;
}  

}

generateSpeakersContainer();
