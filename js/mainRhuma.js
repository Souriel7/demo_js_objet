import Categorie from "./Categorie.js";
import Produit from "./Produit.js";

const response = await fetch("data/getProduits.php");//on récupère les données
const produits = await response.json();// on encode les données au format json => parse

console.log(produits);

produits.forEach(produit => {
    const categorie = new Categorie(produit.categorie.idCategorie, produit.categorie.nomCategorie);
    const currentProduit = new Produit(produit.idProduit, produit.nom, produit.prix, categorie);
    const article = currentProduit.render();
    document.body.appendChild(article);
});