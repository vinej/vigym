import { h, Component } from 'preact';
import style from './style';
//import { observer } from 'mobx-preact-lite';
//import Authentification from '../../../stores/auth_store';
//import { route } from 'preact-router';

export default class SignUp extends Component {
	render() {
        return (
            <div class={style.signup}>
                <h2>Sign Up</h2>
                <form>
                    <label>Email:</label>
                    <input type="text"></input>
                    <label>PW:</label>
                    <input type="text"></input>
                    <label>CPW:</label>
                    <input type="text"></input>
                    <button class="pure-button">S'enregister</button>
                </form>
            </div>
        )
	}
}
