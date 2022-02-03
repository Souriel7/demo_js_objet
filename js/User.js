export default class User {
    id;
    pseudo;
    email;

    constructor(id, pseudo, email) {
        this.id = id;
        this.pseudo = pseudo;
        this.email = email;
    }
    render() {
        const article = document.createElement("article");
        const h1 = document.createElement("h1");
        h1.textContent = this.pseudo;
        const p = document.createElement("p");
        p.textContent = this.email;
        article.appendChild(h1);
        article.appendChild(p);
        return article;
    }
}