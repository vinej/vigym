import { h, Component } from 'preact';
import style from './style';
//import linkState from 'linkstate';
//import Authentification from '../../../stores/auth_store';
//import { route } from 'preact-router';

export default class SignIn extends Component {
    state = {
        email : '',
        isEmailTouched : false,
        password : '',
        isPassordTouched : false,
        confirmedPassword : '',
        isConfirmedPasswordTouched : false
    }

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        console.log('on sign in', this.state);
    }

	render( {}, { email, isEmailTouched, password, isPasswordTouched, confirmedPassword, isConfirmedPasswordTouched }) {
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
                        <br/>
                        <button onClick={this.handleSubmit} class="pure-button">S'enregistrer</button>
                    </div>
                </form>
            </div>
        )
	}
}
