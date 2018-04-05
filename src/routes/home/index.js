import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	state = {
		isAutenticated: false
	};

	SignIn() {

	}

	SignUp() {

	}

	componentWillMount() {

	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>

				<button onClick="SignIn" class="pure-button">Se connected</button>
				<button onClick="SignUp" class="pure-button">S'enregister</button>
			</div>
		);
	}
}
