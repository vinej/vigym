import { h, Component } from 'preact';
import style from './style';
//import { observer } from 'mobx-preact-lite';
//import Authentification from '../../../stores/auth_store';

//@observer
export default class Gym extends Component {
	componentWillMount() {
	}

	render() {
		return (
			<div class={style.gym}>
				<h2>Vous êtes à l'intérieure du gymnase</h2>
			</div>
		)
	}
}

