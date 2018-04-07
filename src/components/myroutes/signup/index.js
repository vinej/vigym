import { h, Component } from 'preact';
import style from './style';
import AuthStore from '../../../stores/auth_store';
import Profile from '../../../models/profile';

export default class SignIn extends Component {
	state = {
		email: '',
		isEmailTouched: false,
		password: '',
		isPassordTouched: false,
		confirmedPassword: '',
		isConfirmedPasswordTouched: false,
		photo: null,
		isValid: true
	}

	isFormValid() {
		return this.state.email !== '' && this.state.password !== ''
				&& this.state.password === this.state.confirmedPassword;
	}

	takePhoto = e => {
		let fileTobeRead = e.target.files[0];
		let me = this;
		let reader = new FileReader();
		reader.onload = e => {
			me.setState({ photo: reader.result });
		};
		reader.onerror = function(event) {
			console.error('File could not be read! Code ' + event.target.error.code);
		};
		reader.readAsDataURL(fileTobeRead);
	}

	updateEmail = e => {
		this.setState({ email: e.target.value, isEmailTouched: true });
	};

	updatePassword = e => {
		this.setState({ password: e.target.value, isPasswordTouched: true });
	};

	updateConfirmedPassword = e => {
		this.setState({ confirmedPassword: e.target.value, isConfirmedPasswordTouched: true });
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.isFormValid) {
			let p = new Profile();
			p.email = this.state.email;
			p.password = this.state.password;
			p.photo = this.state.photo;
			AuthStore.signUp(p);
		}
		else {
			this.state.isValid = false;
		}
	}

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.takePhoto = this.takePhoto.bind(this);
	}

	render( {}, { email, isEmailTouched,
		password, isPasswordTouched,
		confirmedPassword, isConfirmedPasswordTouched,
		photo, isValid }) {
		return (
			<div class={style.signup}>
				<form class="pure-form " >
					<fieldset>S'enregister</fieldset>
					<div class={style.signup_form}>
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
						<label>Confirmer le mot de passe</label>
						<input type="password"
							onChange={this.updateConfirmedPassword}
							value={confirmedPassword}
						/>
						<span style="color:red">{
							confirmedPassword === '' && isConfirmedPasswordTouched
							 ? 'La confirmation du mot de passe est obligatoire' : '' }</span>
						<span style="color:red">{
							confirmedPassword !== password && isPasswordTouched && isConfirmedPasswordTouched
							 ? 'Les deux mots de passe ne sont pas identiques' : '' }</span>
						<label>Take a selphie</label>
						<input onChange={this.takePhoto} type="file"  accept="image/*" />
						<img src={photo} height="50" />
						<br />
						<button onClick={this.handleSubmit} class="pure-button">S'enregistrer</button>

						<span  style="color:red">{ !isValid ? 'La forme est invalide' : '' }</span>
					</div>
				</form>
			</div>
		);
	}
}
