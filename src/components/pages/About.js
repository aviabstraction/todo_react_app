import React from 'react';

function About() {
	return (
		<div style={styles.containerStyle}>
			<h1>About</h1>
			<p>This is My First React APP</p>
		</div>
	);
}

const styles = {
	containerStyle: {
		padding: 20,
		fontFamily: 'Ubuntu'
	}
};

export default About;
