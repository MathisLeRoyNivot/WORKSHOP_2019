const personData = [
    {
        firstName: "Steven",
        lastName: "Fongue",
        status: "Chef d'équipe",
        promo: "Master 2 - Informatique",
        mySkills: ["Développeur"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Corentin",
        lastName: "Guillard",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développement Full Stack - Junior"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Dimitri",
        lastName: "Kossoboutzky",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Mathis",
        lastName: "Le Roy-Nivot",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développement Full Stack - Junior", "Montage Vidéo"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Corentin",
        lastName: "Lemarchand",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["Modélisation 3D"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Julien",
        lastName: "Marcillet",
        promo: "Master 1 - Communication 360",
        mySkills: ["Marketing", "Communication"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Kévin",
        lastName: "Maheo",
        promo: "Master 2 - Informatique (Réseaux)",
        mySkills: ["Administration des systèmes", "Administration réseau"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Théodore",
        lastName: "Nouzillat",
        promo: "Bachelor 3 - Informatique",
        mySkills: ["Développement Full Stack"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Clémentine",
        lastName: "Pouillet",
        promo: "Bachelor 3 - Design",
        mySkills: ["Design"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Alix",
        lastName: "Nouzillat",
        promo: "Master 1 - Chef de projet Web",
        mySkills: ["Développement Full Stack"],
        photo: "https://via.placeholder.com/150",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    }
];

function statut(status) {
    return `
<p class="test">
${status.map(status => `${status}`).join("")}
</p>
`;
}

function skills(skills) {
    return `
<h4>Compétences</h4>
<ul class="skills-list">
${skills.map(skills => `<li class="skills">${skills}</li>`).join("")}
</ul>
`;
}

function personTemplate(person) {
    return `
    <div class="person-card">
    <img class="person-photo" src="${person.photo}">
    <h2 class="person-name">${person.firstName} <span class="lastname">${person.lastName}</span></h2>
    <h4 class="person-promo">${person.promo}</h4>
    ${person.mySkills ? skills(person.mySkills) : ""}
    <div class="overlay">
    <div class="text">${person.content}</div>
    </div>
    </div>
  `;
}

document.getElementById("group-members").innerHTML = `
  ${personData.map(personTemplate).join("")}
`;

document.getElementById("footer-content").innerHTML = `
<div class="footer-text"><p>Les Dix Huitres, 2019 ©</p></div>
<div class="social-networks">
    <a class="picto" href="#f" target="_blank"><i class="fab fa-facebook-square"></i></a>
    <a class="picto" href="#t" target="_blank"><i class ="fab fa-twitter-square"></i></a>
    <a class="picto" href="#i" target="_blank"><i class="fab fa-instagram"></i></a>
</div>
`;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ${personData.length} personnes composent le groupe #18 -



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}