import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Authentification from '../../stores/auth_store';
import MicroEvent from '../../stores/microevent';

export default MicroEvent.mixin(class Header extends Component {
	state = {
		isAuthenticated : false
	}

	componentWillMount() {
		this.mbind('auth', this, this.onAuth);
	}

	componentWillUnmount() {
		this.munbind('auth', this, this.onAuth)
	}

	onAuth(data) {
		console.log('event', data.isAuthenticated);
		this.setState( {
			isAuthenticated : data.isAuthenticated
		})
	}

	render() {
		return (
			<header class={style.header}>
				<h1>ViGym v4</h1>
				<nav>
					<Link activeClassName={style.active} href="/vigym">Home</Link>
					{ this.state.isAuthenticated  ? (
						<span>
							<Link activeClassName={style.active} href="/vigym/gym">Gym</Link>
							<Link activeClassName={style.active} href="/vigym/signout">Out</Link>
						</span>
					) : (
						<span>
							<Link activeClassName={style.active} href="/vigym/signin">In</Link>
							<Link activeClassName={style.active} href="/vigym/signup">Up</Link>
							<Link class={style.headerlink} activeClassName={style.active} href="/vigym/profile">Me</Link>
						</span>
					)}
				</nav>
			</header>
		);
	}
})
