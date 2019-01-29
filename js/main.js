const personData = [
    {
        firstName: "Steven",
        lastName: "Fongue",
        promo: "Master 2 - Informatique",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Valentin",
        lastName: "Guillard",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["", ""],
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
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Corentin",
        lastName: "Lemarchand",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Julien",
        lastName: "Macillet",
        promo: "Master 1 - Communication 360",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Kévin",
        lastName: "Maheo",
        promo: "Master 2 - Informatique (Réseaux)",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    },
    {
        firstName: "Clémentine",
        lastName: "Pouillet",
        promo: "Bachelor 3 - Design",
        mySkills: ["", ""],
        photo: "https://via.placeholder.com/150"
    }
];




function skills(skills) {
    return `
<h4>Compétences</h4>
<ul class="skills-list">
${skills.map(skills => `<li>${skills}</li>`).join("")}
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

document.getElementById("app").innerHTML = `
  ${personData.map(personTemplate).join("")}
  <p class="footer">${personData.length} personnes composent le groupe n°18</p>
`;

