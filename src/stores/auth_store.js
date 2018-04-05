import { observable } from "mobx"

class Authentification {
    id = Math.random();
    @observable isAuthenticated = true;
    @observable user = "";
}

export default new Authentification();