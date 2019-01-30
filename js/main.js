const personData = [
    {
        firstName: "Steven",
        lastName: "Fongue (Chef de groupe)",
        status: "Chef d'équipe",
        promo: "Master 2 - Informatique (Dev)",
        mySkills: ["Développeur"],
        photo: "img/faces/img-steven.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Corentin",
        lastName: "Guillard",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développement Full Stack - Junior"],
        photo: "img/faces/img-corentinG.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Dimitri",
        lastName: "Kossoboutzky",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["Modélisation 3D"],
        photo: "img/faces/img-dimitri.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Mathis",
        lastName: "Le Roy-Nivot",
        promo: "Bachelor 2 - Informatique",
        mySkills: ["Développement Full Stack - Junior", "Montage Vidéo"],
        photo: "img/faces/img-mathis.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Corentin",
        lastName: "Lemarchand",
        promo: "Bachelor 1 - 3D Animations",
        mySkills: ["Modélisation 3D"],
        photo: "img/faces/img-corentinL.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Julien",
        lastName: "Marcillet",
        promo: "Master 1 - Communication 360",
        mySkills: ["Marketing", "Communication"],
        photo: "img/faces/img-julien.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Kévin",
        lastName: "Maheo",
        promo: "Master 2 - Informatique (Réseaux)",
        mySkills: ["Administration des systèmes", "Administration réseau"],
        photo: "img/faces/img-kevin.png",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
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
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quo placeat omnis et consectetur deleniti qui explicabo officiis."
    },
    {
        firstName: "Alix",
        lastName: "Nouzillat",
        promo: "Master 1 - Chef de projet Web",
        mySkills: ["Développement Full Stack"],
        photo: "img/faces/img-alix.png",
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
    <a href="#top" onclick="return menuBurger()"><img class="logo" src="img/logo-10huitres.png"
                        alt="logo"></a>
    <a href="#members">Membres</a>
    <ul id="lp-n-links">
        <li>
            <a id="first-link" href="#pagePresentation">Présentation</a>
        </li>
        <li>
            <a id="nav-link2" href="#pageActualités">Actualités</a>
        </li>
        <li>
            <a id="nav-link3" href="#pageContact">Contact</a>
        </li>
    </ul>
    `;
} else if (w > 600) {
    document.getElementsByClassName("liste")[0].innerHTML = `
    <a href="#presentation-text">Présentation</a></li>
    <a href="#top" onclick="return topFunction()"><img class="logo" src="img/logo-10huitres.png"
                        alt="logo"></a>
    <a href="#members">Membres</a>
    <ul id="lp-n-links">
        <li>
            <a id="first-link" href="#pagePresentation">Présentation</a>
        </li>
        <li>
            <a id="nav-link2" href="#pageActualités">Actualités</a>
        </li>
        <li>
            <a id="nav-link3" href="#pageContact">Contact</a>
        </li>
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