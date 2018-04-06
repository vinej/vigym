import { h, Component } from 'preact';
import style from './style';
import Authentification from '../../../stores/auth_store';

export default class Home extends Component {
	componentWillMount() {
		this.auth.bind(this);
	}

	auth() {
		Authentification.setAuthentification(!Authentification.getData().isAuthenticated)
	}

	render() {
		return (
			<div class={style.home}>
				<h2>ViGym est votre site d'entrainement</h2>
				<button onClick={this.auth} class="pure-button button-success">Se connected</button>
				<span>&nbsp;</span>
				<button class="pure-button button-secondary">S'enregister</button>
			</div>
		)
	}
}
