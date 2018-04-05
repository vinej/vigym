import { h, Component } from 'preact';
import style from './style';
//import { observer } from 'mobx-preact-lite';
//import Authentification from '../../../stores/auth_store';
//import { route } from 'preact-router';

//@observer
export default class Home extends Component {
	//componentWillMount() {
	//	if (Authentification.isAuthenticated) {
	//		route("vigym/gym", true);
	//	}
	//}

	render() {
		return (
			<div class={style.home}>
				<h2>ViGym est votre site d'entrainement</h2>
				<button class="pure-button button-success">Se connected</button>
				<span>&nbsp;</span>
				<button class="pure-button button-secondary">S'enregister</button>
			</div>
		)
	}
}
