import MicroEvent from './microevent';

class AuthStore {
    name = "auth_store"

    data = {
        isAuthenticated : true
    }

    getData() {
        return this.data;
    }

    setAuthentification(isAuth) {
        this.data.isAuthenticated = isAuth;
        this.mtrigger(this.name, this.data);
    }
};

const store = new AuthStore();
MicroEvent.mixin(store)
export default store;