import { h, Component } from 'preact';
import style from './style';
import AuthStore from '../../../stores/auth_store';
import Profile from '../../../models/profile';
import { route } from 'preact-router';

export default class SignIn extends Component {
	state = {
		email: '',
		isEmailTouched: false,
		password: '',
		isPasswordTouched: false
	}

	isFormValid() {
		return this.state.email !== '' && this.state.password !== '';
	}

	handleSubmit = e => {
		e.preventDefault();
		const p = new Profile();
		p.email = this.state.email;
		p.password = this.state.password;
		if (this.isFormValid()) {
			AuthStore.signIn( p );
			route('/vigym', true);
		}
	}

	updateEmail = e => {
		this.setState({ email: e.target.value, isEmailTouched: true });
	};

	updatePassword = e => {
		this.setState({ password: e.target.value, isPasswordTouched: true });
	};

	componentWillMount() {
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render( {}, { email, isEmailTouched, password, isPasswordTouched }) {
		return (
			<div class={style.signin}>
				<form class="pure-form " >
					<fieldset>Se connecter</fieldset>
					<div class={style.signin_form}>
						<label>Courriel</label>
						<input type="text"
							id="Email"
							onChange={this.updateEmail}
							value={email}
						/>
						<span style="color:red">{ email === '' && isEmailTouched ? 'Le courriel est obligatoire' : '' }</span>
						<label>Mot de passe</label>
						<input type="password"
							onChange={this.updatePassword}
							value={password}
						/>
						<span style="color:red">{ password === '' && isPasswordTouched ? 'Le mot de passe est obligatoire' : '' }</span>
						<br />
						<button onClick={this.handleSubmit} class="pure-button">Se connecter</button>
					</div>
				</form>
			</div>
		);
	}
}
