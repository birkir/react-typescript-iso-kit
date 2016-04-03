import path from 'path';
import React from 'react';

const s = require('./home.less');

class Home extends React.Component {
	render() {
		return (
			<div className={s.homeas}>
				<p>I'm at home YEAH!</p>
			</div>
		);
	}
}

export default Home;