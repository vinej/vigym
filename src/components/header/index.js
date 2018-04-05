import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	componentWillMount() {

	}

	render() {
		return (
			<header class={style.header}>
				<h1>ViGym v4</h1>
				<nav>
					<Link activeClassName={style.active} href="/vigym">Home</Link>
					<Link activeClassName={style.active} href="/vigym/gym">Gym</Link>
					<Link activeClassName={style.active} href="/vigym/signin">In</Link>
					<Link activeClassName={style.active} href="/vigym/signup">Up</Link>
					<Link activeClassName={style.active} href="/vigym/signout">Out</Link>
					<Link activeClassName={style.active} href="/vigym/profile">Me</Link>
				</nav>
			</header>
		);
	}
}
