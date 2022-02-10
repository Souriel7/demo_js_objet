export default class Produit {
    idProduit;
    nom;
    prix;

    constructor(idProduit, nom, prix) {
        this.idProduit = idProduit;
        this.nom = nom;
        this.prix = prix;
    }
    render() {
        const article = document.createElement("article");
        const h1 = document.createElement("h1");
        h1.textContent = this.nom;
        const p = document.createElement("p");
        p.textContent = this.prix;
        article.appendChild(h1);
        article.appendChild(p);
        return article;
    }
}