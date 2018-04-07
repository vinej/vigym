import MicroEvent from './microevent';
import { set } from './indexdb';

class AuthStore {
	name = 'auth_store'

	data = {
		isAuthenticated: true
	}

	signIn( profile ) {
		set( 'user', profile)
			.then(() => console.log('It worked!'))
			.catch(err => console.log('It failed!', err));
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