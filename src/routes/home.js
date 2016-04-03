import path from 'path';
import React from 'react';
import Button from 'Button';
import s from './home.less';

class Home extends React.Component {
	render() {
		return (
			<div className={s.homeas}>
				<p>I'm at home YEAH!</p>
				<Button>Hi world</Button>
			</div>
		);
	}
}

export default Home;