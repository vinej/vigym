import { h, Component } from 'preact';
import style from './style';
import Authentification from '../../../stores/auth_store';
//import { route } from 'preact-router';

export default class SignIn extends Component {

    

	render() {
        return (
            <div class={style.signin}>
                <h2>Sign In</h2>
                <form>
                    <label>Email:</label>
                    <input type="text"></input>
                    <label>PW:</label>
                    <input type="text"></input>
                    <button class="pure-button">Se connecter</button>
                </form>
            </div>
        )
	}
}
