import MicroEvent from './microevent';
import { set } from '../../../stores/indexdb';

class AuthStore {
	name = 'auth_store'

	data = {
		isAuthenticated: true
	}

	signIn( data ) {
		set( data.email, data);
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