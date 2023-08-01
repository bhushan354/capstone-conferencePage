const speakers = [
  {
    img: "images/speaker1.png",
    name: "Virat Kohli",
    about: "cricket player , Batsman",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ",
  },
  {
    img: "images/speaker1.png",
    name: "Virat Kohli",
    about: "cricket player , Batsman",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ",
  },
  {
    img: "images/speaker1.png",
    name: "Virat Kohli",
    about: "cricket player , Batsman",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ",
  },
  {
    img: "images/speaker1.png",
    name: "Virat Kohli",
    about: "cricket player , Batsman",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ",
  },
  {
    img: "images/speaker1.png",
    name: "Virat Kohli",
    about: "cricket player , Batsman",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ",
  },
  {
    img: "images/speaker1.png",
    name: "Virat Kohli",
    about: "cricket player , Batsman",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos aspernatur corrupti ",
  },
];

document.addEventListener("DOMContentLoaded", () => {
 

const speakersContainer = document.querySelector(".speakersContainer");
const speakersList = document.querySelector(".speakersList");

speakersContainer.appendChild(speakersList);

const speaker1 = document.createElement("div");
speaker1.setAttribute("class", "speaker1");



document.addEventListener("DOMContentLoaded", () => {
  const speakersContainer = document.querySelector(".speakersContainer");
  const speakersList = document.querySelector(".speakersList");

  function createSpeakerElement(speaker) {
    const speakerDiv = document.createElement("div");
    speakerDiv.setAttribute("class", "speaker1");

    speakerDiv.innerHTML = `
      <div class="speakerImg">
        <img src="${speaker.img}" alt="speaker">
      </div>
      <div class="infoSpeaker">
        <h2>${speaker.name}</h2>
        <h3>${speaker.about}</h3>
        <hr class="greyLine">
        <p>${speaker.para}</p>
      </div>
    `;

    return speakerDiv;
  }

  let initialVisible = 2;
  const increment = 4;
  let seeMoreButton;
  let seeLessButton;

  function generateSpeakersContainer() {
    for (let i = 0; i < Math.min(speakers.length, initialVisible); i += 1) {
      const speakerDiv = createSpeakerElement(speakers[i]);
      speakersList.appendChild(speakerDiv);
    }

    if (speakers.length > initialVisible) {
      seeMoreButton = document.createElement('button');
      seeMoreButton.textContent = "See More";
      seeMoreButton.addEventListener('click', showMoreSpeakers);

      seeLessButton = document.createElement('button');
      seeLessButton.textContent = "See Less";
      seeLessButton.style.display = "none";
      seeLessButton.addEventListener('click', showLessSpeakers);

      speakersList.appendChild(seeMoreButton);
      speakersList.appendChild(seeLessButton);

      const speakerDivs = document.querySelectorAll('.speaker1');
      for (let i = initialVisible; i < speakers.length; i += 1) {
        speakerDivs[i].style.display = "none";
      }
    }
  }

    function showMoreSpeakers() {
      const speakerDivs = document.querySelectorAll(".speaker1");
      for (let i = initialVisible; i < Math.min(speakers.length, initialVisible + increment); i += 1) {
        const speakerDiv = createSpeakerElement(speakers[i]);
        speakersList.appendChild(speakerDiv);
        speakerDivs[i].style.display = "block";
      }
      initialVisible += increment;
  
      if (initialVisible >= speakers.length) {
        seeMoreButton.style.display = "none";
        seeLessButton.style.display = "block";
      }
    }

    function showLessSpeakers() {
      const speakerDivs = document.querySelectorAll(".speaker1");
      for (let i = initialVisible - increment; i < initialVisible; i += 1) {
        speakerDivs[i].style.display = "none";
      }
      initialVisible -= increment;

      if (initialVisible <= 2) {
        seeMoreButton.style.display = "block";
        seeLessButton.style.display = "none";
      }
    }

    for (let i = 0; i < Math.min(speakers.length, initialVisible); i += 1) {
      const speakerDiv = createSpeakerElement(speakers[i]);
      speakersList.appendChild(speakerDiv);
    }

   

    generateSpeakersContainer();
  }
)
});


function hamburgerOpen() {
  const section = document.querySelectorAll("section");
  const navbar2 = document.querySelector(".navbar2");

  navbar2.style.display = "flex";
  section.forEach((section) => {
    section.style.display = "none";
  });
}

function hamburgerClose() {
  const section = document.querySelectorAll("section");

  const navbar2 = document.querySelector(".navbar2");
  navbar2.style.display = "none";

  section.forEach((section) => {
    section.style.display = "";
  });
}
