import Produit from "./Produit.js";

const response = await fetch("data/getProduits.php");//on récupère les données
const produits = await response.json();// on encode les données au format json

console.log(produits);

produits.forEach(produit => {
    const currentProduit = new Produit(produit.idProduit, produit.nom, produit.prix);
    const article = currentProduit.render();
    document.body.appendChild(article);
});