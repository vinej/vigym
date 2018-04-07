import { h, Component } from 'preact';
import style from './style';
import AuthStore from '../../../stores/auth_store';

export default class Home extends Component {
	auth() {
		AuthStore.setAuthentification(!AuthStore.getData().isAuthenticated);
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
