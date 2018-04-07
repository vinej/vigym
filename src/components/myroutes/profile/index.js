import { h, Component } from 'preact';
import style from './style';
import { get } from '../../../stores/indexdb';
export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10,
		photo: null
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	componentWillMount() {
		let me = this;
		get('user').then(p => {
			if (p.photo) {
				me.setState( { photo: p.photo });
			}
		});
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count, photo }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>
				<img src={ photo } height="200" width="200" />
				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
			</div>
		);
	}
}
