import { h, Component } from 'preact';
import style from './style';
import { observer } from 'mobx-preact-lite';
import Authentification from '../../../stores/auth_store';

@observer
export default class Home extends Component {
	componentWillMount() {
	}

	render() {

		console.log("Authentification.isAuthenticated");

		if (Authentification.isAuthenticated) {
			return (
				<div class={style.home}>
					<h2>ViGym est votre site d'entrainement</h2>
					<button onClick="SignIn" class="pure-button button-success">Se connected</button>
					<span>&nbsp;</span>
					<button onClick="SignUp" class="pure-button button-secondary">S'enregister</button>
				</div>
			)
		} else {
			return (
				<div class={style.home}>
					<h2>ViGym est votre site d'entrainement</h2>
				</div>
			)
		}
	}
}
