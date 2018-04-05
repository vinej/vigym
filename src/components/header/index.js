import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	componentWillMount() {

	}

	render() {
		return (
			<header class={style.header}>
				<h1>ViGym v3</h1>
				<nav>
					<Link activeClassName={style.active} href="/vigym">Gym</Link>
					<Link activeClassName={style.active} href="/vigym/profile">Me</Link>
					<Link activeClassName={style.active} href="/vigym/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
