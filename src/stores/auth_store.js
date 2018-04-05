import { observable } from "mobx"

class Authentification {
    id = Math.random();
    @observable isAuthenticated = false;
    @observable user = "";
}

export default new Authentification();