import { h, Component } from 'preact';
import style from './style';
//import { observer } from 'mobx-preact-lite';
//import Authentification from '../../../stores/auth_store';
//import { route } from 'preact-router';

export default class SignOut extends Component {
	state = {
		email: ''
	}
	
	render() {
		return (
			<div class={style.signout}>
				<h2>Sign Out</h2>
				<h3>Merci d'avoir utilisé ViGym</h3>
			</div>
		)
	}
}
