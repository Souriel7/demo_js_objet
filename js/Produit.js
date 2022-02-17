import Categorie from "./Categorie.js";// ne sert pas si on ne crée pas d'instance de Categorie dans le constructor

export default class Produit {
    idProduit;
    nom;
    prix;
    categorie;

    constructor(idProduit, nom, prix, categorie) {
        this.idProduit = idProduit;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        // this.categorie = new Categorie(categorie.idCategorie, categorie.nomCategorie);
    }
    render() {
        const article = document.createElement("article");
        const h1 = document.createElement("h1");
        h1.textContent = this.nom;
        const htmlCategorie = this.categorie.render();
        const p = document.createElement("p");
        p.textContent = this.prix;
        article.appendChild(h1);
        article.appendChild(htmlCategorie);
        article.appendChild(p);
        return article;
    }
}