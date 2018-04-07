import { h, Component } from 'preact';
import style from './style';
import AuthStore from '../../../stores/auth_store';
import Profile from '../../../models/profile';
export default class SignIn extends Component {
	state = {
		email: '',
		isEmailTouched: false,
		password: '',
		isPasswordTouched: false,
		photo: 'file:///C:/Users/jyv/Pictures/img001.jpg'
	}

	isFormValid() {
		return this.state.email !== '' && this.state.password !== ''
				&& this.state.password === this.state.confirmedPassword;
	}

	handleSubmit(e) {
		e.preventDefault();
		//me = this.state;
		const p = new Profile();
		p.email = this.state.email;
		p.password = this.state.password;
		p.photo = this.state.photo;
		//if (this.isFormValid()) {
			AuthStore.signIn( p );
		//}
	}

	photoTaken(e) {
		var fileTobeRead = e.target.files[0]
		var me = this;
		var reader = new FileReader(); 
		reader.onload = function (e) { 
			me.setState({ photo: reader.result });
		};
		reader.onerror = function(event) {
			console.error("File could not be read! Code " + event.target.error.code);
		};
		reader.readAsDataURL(fileTobeRead); 
	}

	updateEmail = e => {
		this.setState({ email: e.target.value, isEmailTouched: true });
	};

	updatePassword = e => {
		this.setState({ password: e.target.value, isPasswordTouched: true });
	};

	componentWillMount() {
		this.handleSubmit = this.handleSubmit.bind(this);
		this.photoTaken = this.photoTaken.bind(this);
	}

	render( {}, { email, isEmailTouched, password, isPasswordTouched, photo }) {
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
						<label>Take a selphie</label>
						<input onChange={e => this.photoTaken(e)} type="file"  accept="image/*" />
						<br />
						<img src={ photo } height="200" width="200" />
						<button onClick={e => this.handleSubmit(e)} class="pure-button">Se connecter</button>
					</div>
				</form>
			</div>
		);
	}
}
