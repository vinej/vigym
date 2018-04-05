import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { observer } from 'mobx-preact-lite';
import Authentification from '../../stores/auth_store';

@observer
export default class Header extends Component {
	componentWillMount() {

	}

	render() {
		return (
			<header class={style.header}>
				<h1>ViGym v4</h1>
				<nav>
					<Link activeClassName={style.active} href="/vigym">Home</Link>
					{!Authentification.isAuthenticated ? 
						<Link activeClassName={style.active} href="/vigym/signin">In</Link> : "" }
					{!Authentification.isAuthenticated ? 
						<Link activeClassName={style.active} href="/vigym/signup">Up</Link> : "" }
					{Authentification.isAuthenticated ? 
						<Link activeClassName={style.active} href="/vigym/gym">Gym</Link> : "" }
					{Authentification.isAuthenticated ? 
						<Link activeClassName={style.active} href="/vigym/signout">Out</Link> : "" }
					{Authentification.isAuthenticated ? 
						<Link class={style.headerlink} activeClassName={style.active} href="/vigym/profile">Me</Link> : "" }
				</nav>
			</header>
		);
	}
}
