import MicroEvent from './microevent';
import { set, get } from './indexdb';
import { route } from 'preact-router';

class AuthStore {
	name = 'auth_store'

	data = {
		isAuthenticated: false
	}

	signOut() {
		this.data.isAuthenticated = false;
		this.mtrigger(this.name, this.data);
	}

	signIn( profile ) {
		let me = this;
		get('user').then(p => {
			if (profile.email === p.email && profile.password === p.password) {
				me.data.isAuthenticated = true;
				me.mtrigger(me.name, me.data);
				route('/vigym', true);
			}
			else {
				// message box, wrong pw
			}
		});
	}

	signUp( profile ) {
		let me = this;
		set( 'user', profile)
			.then(() => {
				me.data.isAuthenticated = true;
				me.mtrigger(me.name, me.data);
				route('/vigym', true);
			})
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