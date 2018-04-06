import MicroEvent from './microevent';

class Authentification {
    data = {
        isAuthenticated : true
    }

    getData() {
        return this.data;
    }

    setAuthentification(isAuth) {
        this.data.isAuthenticated = isAuth;
        this.mtrigger('auth', this.data);
    }
};

const store = new Authentification();
MicroEvent.mixin(store)

export default store;