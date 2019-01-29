const personData = [
    {
        firstName: "Steven",
        lastName: "Fongue",
        status: "Chef d'équipe",
        promo: "Master 2 - Informatique",
        mySkills: ["Développeur"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Corentin",
        lastName: "Guillard",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développeur Full Stack - Junior"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Dimitri",
        lastName: "Kossoboutzky",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Mathis",
        lastName: "Le Roy-Nivot",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développeur Full Stack - Junior", "Montage Vidéo"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Corentin",
        lastName: "Lemarchand",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["Modélisation 3D"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Julien",
        lastName: "Macillet",
        promo: "Master 1 - Communication 360",
        mySkills: ["Marketing", "Communication"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Kévin",
        lastName: "Maheo",
        promo: "Master 2 - Informatique (Réseaux)",
        mySkills: ["Administration des systèmes"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Clémentine",
        lastName: "Pouillet",
        promo: "Bachelor 3 - Design",
        mySkills: ["Design"],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Alix",
        lastName: "Nouzillat",
        promo: "Master 1 - Chef de projet Web",
        mySkills: ["Développeur Full Stack"],
        photo: "https://via.placeholder.com/150"
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
    </div>
  `;
}

document.getElementById("group-members").innerHTML = `
  ${personData.map(personTemplate).join("")}
`;

document.getElementById("footer-content").innerHTML = `
<div class="footer">${personData.length} personnes composent le groupe #18 - Les Dix Huitres</div>
<div class="social-networks">
    <a href="#f" target="_blank"><i class="fab fa-facebook-square"></i></a>
    <a href="#t" target="_blank"><i class ="fab fa-twitter-square"></i></a>
    <a href="#i" target="_blank"><i class="fab fa-instagram"></i></a>
</div>
`;