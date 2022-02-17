export default class Categorie {
    idCategorie;
    nomCategorie;
    constructor(idCategorie, nomCategorie) {
        this.idCategorie = idCategorie;
        this.nomCategorie = nomCategorie;
    }
    render() {
        const h2 = document.createElement("h2");
        h2.textContent = "Catégorie : " + this.nomCategorie;
        return h2;
    }
}