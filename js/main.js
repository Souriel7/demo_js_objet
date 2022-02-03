import User from "./User.js";

const response = await fetch("data/data.json");//on récupère les données
const users = await response.json();// on encode les données au format json

users.forEach(user => {
    // affichage sans classe User
    // const article = afficherUser(user);//on crée un article pour chaque user
    // document.body.appendChild(article);//on affiche l'article dans la page

    // affichage avec classe User
    const currentUser = new User(user.id, user.pseudo, user.email);
    const article = currentUser.render();
    document.body.appendChild(article);
});


// function afficherUser(user) {
//     const article = document.createElement("article");
//     const h1 = document.createElement("h1");
//     h1.textContent = user.pseudo;
//     const p = document.createElement("p");
//     p.textContent = user.email;
//     article.appendChild(h1);
//     article.appendChild(p);
//     return article;
// }

// function afficherUser(user) {

//     const article = document.createElement("article");

//     const h1 = document.createElement("h1");
//     h1.textContent = user.pseudo;
//     const p = document.createElement("p");
//     p.textContent = user.email;
//     article.appendChild(h1);
//     article.appendChild(p);

//     document.body.appendChild(article);
// }