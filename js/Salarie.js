import User from "./User.js";

export default class Salarie extends User {
    salaire;

    constructor(id, pseudo, email, salaire) {
        super(id, pseudo, email);
        this.salaire = salaire;
    }
}