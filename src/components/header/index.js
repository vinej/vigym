import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import AuthStore from '../../stores/auth_store';
import MicroEvent from '../../stores/microevent';

export default MicroEvent.mixin(class Header extends Component {
	state = {
		isAuthenticated : true
	}

	componentWillMount() {
		this.mbind(AuthStore.name, this, this.onAuth);
	}

	componentWillUnmount() {
		this.munbind(AuthStore.name, this, this.onAuth)
	}

	onAuth(data) {
		this.setState( {
			isAuthenticated : data.isAuthenticated
		})
	}

	render() {
		return (
			<header class={style.header}>
				<h1><Link href="/vigym">ViGym</Link></h1>
				<nav>
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
