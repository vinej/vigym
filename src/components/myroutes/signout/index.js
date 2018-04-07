import { h, Component } from 'preact';
import style from './style';
import AuthStore from '../../../stores/auth_store';

export default class SignOut extends Component {
	state = {
		email: ''
	}

	componentWillMount() {
		AuthStore.signOut();
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
