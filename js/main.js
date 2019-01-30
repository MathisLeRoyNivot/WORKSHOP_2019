const personData = [
    {
        firstName: "Steven",
        lastName: "Fongue (Chef de groupe)",
        status: "Chef d'équipe",
        promo: "Mastère 2 - Chef de projet web",
        mySkills: ["Développeur"],
        photo: "img/faces/img-steven.png",
        content: "Étudiant en Mastère 2 – Chef de projet web, je suis à Ynov Nantes depuis 1 an. Pour ma 2e année de workshop, j’ai le rôle de chef de groupe de l’équipe 10’Huitres. Etant développeur, j’espère pouvoir apporter mes compétences aux différents projets qui seront proposés mais aussi travailler en équipe et découvrir toutes les facettes d’un projet. "
    },
    {
        firstName: "Corentin",
        lastName: "Guillard",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développement Full Stack - Junior"],
        photo: "img/faces/img-corentinG.png",
        content: "Actuellement en deuxième année de développement à YNOV NANTES, je mets en pratique mes compétences que j'ai acquis. Je suis là pour donner le meilleur de moi même et apprendre de nouvelles connaissances. Mais surtout me divertir un maximum. Car la vie, est une partie de plaisir."
    },
    {
        firstName: "Dimitri",
        lastName: "Kossoboutzky",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["Modélisation 3D"],
        photo: "img/faces/img-dimitri.png",
        content: "Actuellement en première année d’animation 3D et de jeux vidéo. Sérieux et travailleur, ma compétence est la modélisation 3D, mettre mes qualités en avant pour aider mon groupe, pour la réussite de notre projet."
    },
    {
        firstName: "Mathis",
        lastName: "Le Roy-Nivot",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développement Full Stack - Junior", "Montage Vidéo"],
        photo: "img/faces/img-mathis.png",
        content: "Étudiant en deuxième année de Bachelor Informatique à Ynov Nantes Campus, je serai, pour la deuxième année consécutive, impliqué et sérieux pour mener à bien les différents projets qui nous serons proposés et appliquer mes connaissances au sein d'un groupe multidisciplinaire."
    },
    {
        firstName: "Corentin",
        lastName: "Lemarchand",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["Modélisation 3D"],
        photo: "img/faces/img-corentinL.png",
        content: "Étudiant à Ynov depuis 2 ans, j’ai d’abord fait une année de MANAA que j’ai validée, puis j’ai effectué un changement de filière pour celle d’animation 3D et Jeux Vidéo en première année. Dans le groupe les 10’Huitres, je modéliserais certains objets pour en avoir une meilleure approche pour le groupe."
    },
    {
        firstName: "Julien",
        lastName: "Marcillet",
        promo: "Mastère 1 - Communication 360",
        mySkills: ["Marketing", "Communication"],
        photo: "img/faces/img-julien.png",
        content: "Cela fait maintenant 4 ans que je suis étudiant chez Ynov Nantes. J’ai validé mon bachelor ESSCA/ISSE l’an dernier. Pour ce workshop je suis dans l’équipe 10’Huitres où j’ai le rôle marketing. J’espère qu’avec les différentes compétences qui composent notre groupe nous irons loin."
    },
    {
        firstName: "Kévin",
        lastName: "Maheo",
        promo: "Master 2 - Informatique (Réseaux)",
        mySkills: ["Administration des systèmes", "Administration réseau"],
        photo: "img/faces/img-kevin.png",
        content: "Actuellement en Mastère 2 Expert Cloud Sécurité et Réseau à l’école Ynov Nantes. Suites à mes différentes expériences professionnelles, j’ai su monter en compétences dans les systèmes de supervision, la virtualisation, la conteneurisation ainsi que des compétences dans le DevOps, depuis peu je réalise des recherches ainsi que des projets pour acquérir des compétences dans l’AIOps. Au sein de l’équipe les 10’Huitres, j’apporte mes compétences et mon expérience pour améliorer et fiabiliser l’infrastructure des systèmes d’informations."
    },
    {
        firstName: "Théodore",
        lastName: "Orfèvres",
        promo: "Bachelor 3 - Informatique",
        mySkills: ["Développement Full Stack"],
        photo: "img/faces/img-theodore.png",
        content: "Absent"
    },
    {
        firstName: "Clémentine",
        lastName: "Pouillet",
        promo: "Bachelor 3 - Design",
        mySkills: ["Design"],
        photo: "img/faces/img-clementine.png",
        content: "Étudiante à Ynov Nantes depuis maintenant 2 ans, je suis en 3ème année de Bachelor dans le domaine de la Web Com& Graphic Design. L’an dernier, j’ai validé ma MANAA. Dans le groupe les 10’Huitres, je me charge de la partie Créations/Designs. Attirée par le projet, j’espère pouvoir apporter mes compétences nécessaires pour aller loin avec mon groupe. "
    },
    {
        firstName: "Alix",
        lastName: "Nouzillat",
        promo: "Master 1 - Chef de projet Web",
        mySkills: ["Développement Full Stack"],
        photo: "img/faces/img-alix.png",
        content: "Étudiant à Ynov Nantes depuis 4 ans, je suis actuellement en mastère 1 – Chef de projet web, je suis attiré par toutes les facettes que peut présenter un projet numérique, que ce soit du développement informatique, de la création visuelle, de la communication ou du marketing. J'espère pouvoir apporter mes compétences et ma polyvalence, afin d’aller le plus loin possible avec notre groupe. "
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
<h4 class="skills-title">Compétences</h4>
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
    <hr class="card-separator">
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
    <a class="picto" href="http://bit.do/10huitres" target="_blank"><i class="fab fa-facebook-square"></i></a>
    <a class="picto" href="#t" target="_blank"><i class ="fab fa-twitter-square"></i></a>
    <a class="picto" href="#i" target="_blank"><i class="fab fa-instagram"></i></a>
</div>
`;

// ${personData.length} personnes composent le groupe #18 -




var w = window.innerWidth;

if (w < 600) {
    document.getElementsByClassName("liste")[0].innerHTML = `
    <a href="#presentation-text">Présentation</a></li>
    <a onclick="return menuBurger()"><img class="logo" src="img/logo-10huitres.png"
                        alt="logo"></a>
    <a href="#members">Membres</a>
    <ul id="lp-n-links">
        <a id="nav-link1" href="#presentation-text">Présentation</a>
        <a id="nav-link3" href="#members">Contact</a>
    </ul>
    `;
} else if (w > 600) {
    document.getElementsByClassName("liste")[0].innerHTML = `
    <a href="#presentation-text">Présentation</a></li>
    <a href="#top" onclick="return topFunction()"><img class="logo" src="img/logo-10huitres.png"
                        alt="logo"></a>
    <a href="#members">Membres</a>
    <ul id="lp-n-links">
        <a id="nav-link1" href="#presentation-text">Présentation</a>
        <a id="nav-link3" href="#members">Contact</a>
    </ul>
    `;
}


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

// function menu burger
function menuBurger() {
    var x = document.getElementById("lp-n-links");
    var y = document.getElementById("icons_burger1");
    var z = document.getElementById("icons_burger2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}